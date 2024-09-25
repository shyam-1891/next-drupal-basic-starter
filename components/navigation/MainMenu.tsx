"use client"
import Link from "next/link"
import type { DrupalMenuItem } from "next-drupal"

type MainMenu = {
  items: DrupalMenuItem[]
  level?: string
}

function MainMenu({ items, level }: MainMenu) {
  const handleClick = (e, level, length) => {
    if (level == 1 && length > 0) {
      // e.preventDefault()
      // console.log(e.target)
      // console.log("I clicked on the Menu link..")
      if (e.currentTarget.classList.contains("active")) {
        e.currentTarget.classList.remove("active")
        e.currentTarget.nextElementSibling.style.cssText = "display: none;"
      } else {
        e.currentTarget.classList.add("active")
        e.currentTarget.nextElementSibling.style.cssText = "display: block;"
      }
    }
  }

  return (
    <>
      <ul
        className={`menu primary-nav__menu primary-nav__menu--level-${level}`}
      >
        {items.map((item) => (
          <li
            key={item.id}
            className={`primary-nav__menu-item primary-nav__menu-item--link primary-nav__menu-item--level-${level} ${item.items && item.items.length > 0 ? "primary-nav__menu-item--has-children" : ""}`}
          >
            <Link
              href={`${item.items && item.items.length > 0 ? "#" : item.url}`}
              legacyBehavior
            >
              <a
                // href={`${item.items && item.items.length > 0 ? "#" : item.url}`}
                className={`primary-nav__menu-link primary-nav__menu-link--link primary-nav__menu-link--level-${level} ${item.items && item.items.length > 0 ? "primary-nav__menu-link--has-children" : ""}`}
                onClick={
                  item.items
                    ? (e) => handleClick(e, level, item.items.length)
                    : undefined
                }
              >
                <span
                  className={`primary-nav__menu-link-inner primary-nav__menu-link-inner--level-${level}`}
                >
                  {item.title}
                </span>
              </a>
            </Link>
            {item.items && item.items.length > 0 && (
              <MainMenu items={item.items} level="2" />
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default MainMenu
