export function formatDate(input: string): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(input: string) {
  return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${input}`
}

export function fixImageUrls(htmlContent: string) {
  // console.log("Hello Test =========================")
  // console.log(htmlContent)
  // // return htmlContent.replace(
  // //   /src="\/sites/g,
  // //   `src="${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/sites`
  // // )
  // if (htmlContent != undefined) {
  //   return htmlContent.replace(
  //     /\/sites\/default\/files/g,
  //     `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/sites/default/files`
  //   )
  // } else {
  //   return htmlContent
  // }
  return null
}
