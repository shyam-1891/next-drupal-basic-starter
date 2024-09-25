import Link from "next/link"
import siteLogo from "../../images/Footer-Logo.png"
import Image from "next/image"
import { notFound } from "next/navigation"
import { drupal } from "@/lib/drupal"

async function getFooterFirstMenu() {
  const menu = await drupal.getMenu("footer-one")
  return menu.tree
}

async function getFooterSecondMenu() {
  const menu = await drupal.getMenu("footer-two")
  return menu.tree
}

async function getCopyRightText() {
  const url = drupal.buildUrl(
    `/jsonapi/site_setting_entity/footer_bottom/c69dd757-f226-4e96-b074-af1de3072de7`
  )
  // const data = await response.json()
  const response = await drupal.fetch(url.toString())
  const data = await response.json()
  return data.data
}

async function getFooterMiddle() {
  const url = drupal.buildUrl(`/jsonapi/site_setting_entity/footer_middle`)
  // const data = await response.json()
  const response = await drupal.fetch(url.toString())
  let data = await response.json()
  // console.log(data)
  // console.log(data.data)
  // if (data.data.id) {
  //   const getUrl = drupal.buildUrl(
  //     `/jsonapi/site_setting_entity/footer_middle/${data.data.id}`
  //   )
  //   const getResponse = await drupal.fetch(getUrl.toString())
  //   const getData = await getResponse.json()
  //   console.log(getData)
  // }
  return data.data
}

async function FooterComponent() {
  let footerFirstMenu
  let footerSecondMenu
  let copyRightText
  let footerMiddle
  try {
    footerFirstMenu = await getFooterFirstMenu()
    footerSecondMenu = await getFooterSecondMenu()
    copyRightText = await getCopyRightText()
    footerMiddle = await getFooterMiddle()
  } catch (error) {
    // If getNode throws an error, tell Next.js the path is 404.
    notFound()
    // console.log("Error in fetching menus...")
  }

  return (
    <>
      <div className="container">
        <div className="footer_top">
          <Link href="/" rel="home" title="Boston Children's Hospital Trust">
            <Image src={siteLogo} alt="BCHT-new-logo" />
          </Link>
        </div>
        <div className="footer_middle">
          <div className="first-column">
            <div className="address">
              {footerMiddle &&
                footerMiddle.map((item: any) => {
                  // console.log(item)
                  return <>{item.attributes.field_address}</>
                })}
            </div>
            <div className="contact-link">
              {footerMiddle &&
                footerMiddle.map((item: any) => {
                  return (
                    <>
                      <Link href={item.attributes.field_contact_link.full_url}>
                        {item.attributes.field_contact_link.title}
                      </Link>
                    </>
                  )
                })}
            </div>
          </div>
          <div className="second-column">
            <ul>
              {footerFirstMenu &&
                footerFirstMenu.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href={item.url}>{item.title}</Link>
                    </li>
                  )
                })}
            </ul>
          </div>
          <div className="third-column">
            <ul>
              {footerSecondMenu &&
                footerSecondMenu.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href={item.url}>{item.title}</Link>
                    </li>
                  )
                })}
            </ul>
          </div>
          <div className="fourth-column">
            <div className="social-link-wrapper">
              <span>Follow us</span>
              {footerMiddle &&
                footerMiddle.map((item: any) => {
                  return (
                    <>
                      {item.attributes.field_facebook.full_url ? (
                        <span className="facebook">
                          <Link
                            rel="nofollow"
                            target="_blank"
                            href={item.attributes.field_facebook.full_url}
                          >
                            {item.attributes.field_facebook.title}
                          </Link>
                        </span>
                      ) : (
                        ""
                      )}
                      {item.attributes.field_youtube.full_url ? (
                        <span className="youtube">
                          <Link
                            rel="nofollow"
                            target="_blank"
                            href={item.attributes.field_youtube.full_url}
                          >
                            {item.attributes.field_youtube.title}
                          </Link>
                        </span>
                      ) : (
                        ""
                      )}
                      {item.attributes.field_instagram.full_url ? (
                        <span className="insta">
                          <Link
                            rel="nofollow"
                            target="_blank"
                            href={item.attributes.field_instagram.full_url}
                          >
                            {item.attributes.field_instagram.title}
                          </Link>
                        </span>
                      ) : (
                        ""
                      )}
                      {item.attributes.field_linkedin.full_url ? (
                        <span className="linkedin">
                          <Link
                            rel="nofollow"
                            target="_blank"
                            href={item.attributes.field_linkedin.full_url}
                          >
                            {item.attributes.field_linkedin.title}
                          </Link>
                        </span>
                      ) : (
                        ""
                      )}
                    </>
                  )
                })}
            </div>
            {footerMiddle &&
              footerMiddle.map((item: any) => {
                return (
                  <>
                    {item.attributes.field_link.full_url ? (
                      <div className="newsletter-btn">
                        <Link
                          rel="nofollow"
                          target="_blank"
                          href={item.attributes.field_link.full_url}
                        >
                          {item.attributes.field_link.title}
                        </Link>
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                )
              })}
          </div>
        </div>
        <div className="footer_bottom">
          <span>
            {copyRightText &&
              copyRightText.attributes.field_copyright_text_before_year}
          </span>{" "}
          2024{" "}
          <span>
            {copyRightText &&
              copyRightText.attributes.field_copyright_text_after_year}
          </span>
        </div>
      </div>
    </>
  )
}

export default FooterComponent
