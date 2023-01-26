const operateNavigations = (type, target, variables) => {

  let componentId = (type === "dropdown") ? variables.target : variables.targetId;

  const targetId = type === "dropdown" ? target.querySelector(`[${componentId}]`).getAttribute(componentId) : target.getAttribute(componentId);

  const activeMenu = document.querySelector(`#${targetId}`)

  const nonTargeted = variables.components.map(drop => {
    const nonActiveId = drop.querySelector(`[${componentId}]`).getAttribute(componentId)
    const nonActive = document.querySelector(`#${nonActiveId}`)

    return nonActive
  })

  const filterExceptActive = nonTargeted.filter(target => target !== activeMenu)

  filterExceptActive.forEach(drop => drop.classList.remove(variables.active))

  if (activeMenu) activeMenu.classList.toggle(variables.active)

}

// Closing components
const closeComponents = (type, event, variables) => {

  const target = type === "dropdown" ? event.target.closest(`.${variables.menu}`) || event.target.closest(`[${variables.target}]`) : event.target.closest(`.${variables.menu}`) || event.target.closest(variables.target)

  if (target) return

  variables.components.forEach(comp => {
    const menu = comp.querySelector(`.${variables.menu}`)
    if (menu.classList.contains(variables.active)) menu.classList.remove(variables.active)
  })

}

const dropdown = () => {
  const _variables = {
    main: "e-dropdown",
    menu: "e-dropdown__menu",
    target: "data-dropdown-target",
    active: "e-active",
    components: [...document.querySelectorAll(`.e-dropdown`)],
  }


  document.addEventListener("click", (e) => {

    const target = e.target.closest(`.${_variables.main}`)

    const targetedMenu = e.target.closest(`.${_variables.menu}`)

    if (!target || targetedMenu) return

    e.preventDefault()

    operateNavigations("dropdown", target, _variables);

    // const targetId = target.querySelector(`[${_variables.target}]`).getAttribute(_variables.target)

    // const activeMenu = document.querySelector(`#${targetId}`)

    // const nonTargeted = _variables.dropDown.map(drop => {
    //   const nonActiveId = drop.querySelector(`[${_variables.target}]`).getAttribute(_variables.target)
    //   const nonActive = document.querySelector(`#${nonActiveId}`)

    //   return nonActive
    // })

    // const filterExceptActive = nonTargeted.filter(target => target !== activeMenu)

    // filterExceptActive.forEach(drop => drop.classList.remove(_variables.active))

    // if (activeMenu) activeMenu.classList.toggle(_variables.active)

  })

  window.addEventListener("mouseup", e => {

    closeComponents("dropdown", e, _variables);

    // const target = e.target.closest(`.${_variables.menu}`) || e.target.closest(`[${_variables.target}]`)

    // if (target) return

    // _variables.components.forEach(drop => {
    //   const menu = drop.querySelector(`.${_variables.menu}`)
    //   if (menu.classList.contains(_variables.active)) menu.classList.remove(_variables.active)
    // })

  })
}

dropdown()

const navbar = () => {
  const _variables = {
    main: "e-header",
    menu: "e-header__navitems",
    target: "e-header__mobile--trigger",
    targetId: "data-menu-target",
    active: "e-active",
    components: [...document.querySelectorAll(".e-header")],
  }

  document.addEventListener("click", e => {
    const targetBtn = e.target.closest(`.${_variables.target}`)

    if (!targetBtn) return

    e.preventDefault()

    operateNavigations("navbar", targetBtn, _variables)

    // const targetId = targetBtn.getAttribute(_variables.targetId)

    // const activeMenu = document.querySelector(`#${targetId}`)

    // const nonTargeted = _variables.components.map(head => {
    //   const nonActiveId = head.querySelector(`[${_variables.targetId}]`).getAttribute(_variables.targetId)
    //   const nonActive = document.querySelector(`#${nonActiveId}`)

    //   return nonActive
    // })

    // const filterExceptActive = nonTargeted.filter(target => target !== activeMenu)

    // filterExceptActive.forEach(drop => drop.classList.remove(_variables.active))

    // if (activeMenu) activeMenu.classList.toggle(_variables.active)

  })

  window.addEventListener("mouseup", e => {

    closeComponents("navbar", e, _variables);

    // const target = e.target.closest(`.${_variables.menu}`) || e.target.closest(_variables.target)

    // if (target) return

    // _variables.components.forEach(head => {
    //   const menu = head.querySelector(`.${_variables.menu}`)
    //   if (menu.classList.contains(_variables.active)) menu.classList.remove(_variables.active)
    // })

  })

}

navbar()