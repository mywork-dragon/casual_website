import Butter from 'buttercms';

let butter;

const preview = process.env.PREVIEW === "true"

try {
  butter = Butter(process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY);
}
catch (e) {
  console.log(e)
}

const defaultPageSize = 100
const defaultPostCount = 10

export async function getLandingPage(slug) {
  try {
    const page = await butter.page.retrieve('landing-page', slug, { preview });

    return page?.data?.data;
  } catch (e) {
    throw e.response.data.detail
  }
}

export async function getLandingPages() {
  let paginatedLandingPages = [];
  let currentPage = 1;
  while (!!currentPage) {
    const landingPagesData = await getLandingPagesData(currentPage);
    paginatedLandingPages.push(...landingPagesData.pages);
    currentPage = landingPagesData.nextPage;
  }

  return paginatedLandingPages;
}

async function getLandingPagesData(page, pageSize = defaultPageSize) {
  try {
    const params = {
      preview,
      page,
      page_size: pageSize
    }
    const response = await butter.page.list('landing-page', params);

    return {
      pages: response?.data?.data,
      prevPage: response?.data?.meta.previous_page,
      nextPage: response?.data?.meta.next_page,
    };
  } catch (e) {
    throw e.response.data.detail
  }
}

export async function getCaseStudyPage(slug) {
  try {
    const page = await butter.page.retrieve("case_study", slug);

    return page?.data?.data;
  } catch (e) {
    throw e.response.data.detail
  }
}

export async function getCaseStudyPages() {
  try {
    const pages = await butter.page.list("case_study");
    return pages?.data?.data;
  } catch (e) {
    throw e.response.data.detail
  }
}

export async function getPostsData({ page, pageSize, tag, category } = { page: 1, pageSize: defaultPostCount }) {
  try {
    // https://buttercms.com/docs/api/node?javascript#get-your-blog-posts
    const params = {
      preview,
      page_size: pageSize || defaultPostCount,
      page: page || 1
    }

    if (tag) {
      params.tag_slug = tag
    }

    if (category) {
      params.category_slug = category
    }
    const response = await butter.post.list(params);
    return {
      posts: response?.data?.data,
      prevPage: response?.data?.meta.previous_page,
      nextPage: response?.data?.meta.next_page,
      count: response?.data?.meta.count,
    };
  }
  catch (e) {
    throw e.response.data.detail
  }
}

export async function getPost(slug) {
  try {
    const response = await butter.post.retrieve(slug, { preview });

    return response?.data?.data
  }
  catch (e) {
    throw e.response.data.detail
  }
}

export async function getMainMenu() {
  try {
    const response = await butter.content.retrieve(
      ["navigation_menu"],
      { preview: preview ? 1 : 0 }
    )

    const mainMenu = response?.data?.data?.navigation_menu.find(
      menu => menu.name == "Main menu"
    )

    return mainMenu ? mainMenu.menu_items : []
  }
  catch (e) {
    throw e.response.data.detail
  }
}

export async function getCategories() {
  try {
    const response = await butter.category.list()

    return response?.data?.data
  } catch (e) {
    throw e.response.data.detail
  }
}

export async function getTags() {
  try {
    const response = await butter.tag.list()

    return response?.data?.data
  }
  catch (e) {
    throw e.response.data.detail
  }
}

export async function searchPosts({ query }) {
  try {
    const response = await butter.post.search(query)

    return response?.data?.data
  } catch (e) {
    throw e.response.data.detail
  }
}
