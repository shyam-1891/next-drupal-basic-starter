import Link from "next/link"
import { drupal } from "@/lib/drupal"
import MainMenu from "./MainMenu"
import siteLogo from "../../images/bcht-new-logo.webp"
import Image from "next/image"
import { notFound } from "next/navigation"

async function getMainMenu() {
  const menu = await drupal.getMenu("main-navigation")
  return menu.tree
}

async function getUtilityMenu() {
  const resource = await drupal.getMenu("utitlity-menu")
  return resource.items
}

async function HeaderComponent() {
  let mainMenu
  let utilityMenu
  try {
    mainMenu = await getMainMenu()
    utilityMenu = await getUtilityMenu()
  } catch (error) {
    // If getNode throws an error, tell Next.js the path is 404.
    notFound()
    // console.log("Error in fetching menus...")
  }

  return (
    <>
      <div className="header_top_wrapper">
        <div className="container">
          <div className="header_top__container">
            <div className="search_box_wrapper"></div>

            <div className="utitlity-menu">
              <ul>
                {utilityMenu &&
                  utilityMenu.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link href={item.url}>{item.title}</Link>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header_bottom_wrapper">
        <div className="container">
          <div className="header_bottom__container">
            <div className="header_logo">
              <Link href="/" className="text-2xl font-semibold no-underline">
                {/* Next.js for Drupal - Logo */}
                <Image src={siteLogo} alt="BCHT-new-logo" />
              </Link>
            </div>

            <div className="main-menu">
              <MainMenu items={mainMenu} level="1" />
            </div>

            <div id="menuToggle" role="button" aria-label="Open menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-menu-wrapper">
        <div className="main-menu"></div>
        <div className="mobile_bottom_wrapper">
          <div className="utitlity-menu"></div>
          <div
            className="search__wrapper"
            aria-label="search"
            role="searchbox"
          ></div>
        </div>
      </div>
    </>
  )
}

export default HeaderComponent
