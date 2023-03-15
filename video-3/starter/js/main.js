const operateNavigations = (type, target, variables) => {

  let componentId = type === "dropdown" ? variables.target : variables.targetId;

  const targetId = type === "dropdown" ? target.querySelector(`[${componentId}]`).getAttribute(componentId) : target.getAttribute(componentId)

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

  const target = type === "dropdown" ? event.target.closest(`.${variables.menu}`) || event.target.closest(`[${variables.target}]`) : event.target.closest(`.${variables.menu}`) || event.target.closest(`.${variables.target}`)

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
    components: [...document.querySelectorAll(`.e-dropdown`)]
  }

  document.addEventListener("click", (e) => {

    const target = e.target.closest(`.${_variables.main}`)

    const targetedMenu = e.target.closest(`.${_variables.menu}`)

    if (!target || targetedMenu) return

    e.preventDefault()

    operateNavigations("dropdown", target, _variables);

  })

  window.addEventListener("mouseup", e => {

    closeComponents("dropdown", e, _variables);

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
    components: [...document.querySelectorAll(".e-header")]
  }

  document.addEventListener("click", e => {

    const targetBtn = e.target.closest(`.${_variables.target}`)

    if (!targetBtn) return

    e.preventDefault()

    operateNavigations("navbar", targetBtn, _variables);

  })

  window.addEventListener("mouseup", e => {

    closeComponents("navbar", e, _variables);

  })

}

navbar()

// Progress bar
const progress = () => {

  const _variables = {
    main: [...document.querySelectorAll(".ease-progress")],
    inner: "ease-progress__inner",
    target: "data-current-progress"
  }

  if (_variables.main.length < 1) return

  _variables.main.forEach(prog => {
    const target = +prog.getAttribute(_variables.target)
    const inner = prog.querySelector(`.${_variables.inner}`)

    inner.style.width = `${target}%`
  })

}

progress()

const easeChart = () => {

  // Project updates
  const easeProject = document.querySelector("#ease-project")

  const easeProjectColors = ["#dddde2", "#add4b8", "#bdbfff", "#c098a2"]

  const data = {
    labels: ['Sept - Oct', 'Nov - Dec', 'Jan - Feb'],
    datasets: [
      {
        label: "Total",
        data: [125, 200, 576],
        borderWidth: 1,
        backgroundColor: easeProjectColors[0],
        borderColor: easeProjectColors[0],
      },
      {
        label: "Completed",
        data: [120, 185, 243],
        borderWidth: 1,
        backgroundColor: easeProjectColors[1],
        borderColor: easeProjectColors[1],
      },
      {
        label: "In progress",
        data: [5, 10, 102],
        borderWidth: 1,
        backgroundColor: easeProjectColors[2],
        borderColor: easeProjectColors[2],
      },
      {
        label: "Delayed / canceled",
        data: [0, 5, 231],
        borderWidth: 1,
        backgroundColor: easeProjectColors[3],
        borderColor: easeProjectColors[3],
      },
    ]
  }

  if (easeProject) new Chart(easeProject, {
    type: "bar",
    data: data,
    options: {
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  })

  // Project earning
  const easeProjectEarn = document.querySelector("#ease-earnings")

  const easeProjectEarnColors = ["#bdbfff", "#c098a2", "#add4b8", "#fdc4a1"]

  const dataEarn = {
    labels: ['Web / Mobile Applications', 'Branding / Marketing', 'Financial Analysis / Web / Mobile', 'Consultation'],
    datasets: [
      {
        data: [13243, 6234, 10423, 11423],
        borderWidth: 1,
        backgroundColor: easeProjectEarnColors,
        borderColor: easeProjectEarnColors,
      }
    ]
  }

  if (easeProjectEarn) new Chart(easeProjectEarn, {
    type: "doughnut",
    data: dataEarn,
    options: {
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  })

}

easeChart()

const modal = () => {

  const _variables = {
    target: "data-modal-target",
    active: "e-active"
  }

  document.addEventListener("click", e => {

    const target = e.target.closest(`[${_variables.target}]`)

    if (!target) return

    e.preventDefault()

    const targetId = target.getAttribute(_variables.target)
    const modal = document.querySelector(`#${targetId}`)

    if (!modal) return

    modal.classList.add(_variables.active)
    document.body.style.overflow = "hidden"

  })

  window.addEventListener("mouseup", e => {
    const target = e.target.closest(`[${_variables.target}]`) || e.target.closest(`.ease-subscription-plan`)

    if (target) return

    const modal = e.target.closest(".ease-modal")

    if (!modal || modal && !modal.classList.contains(_variables.active)) return

    modal.classList.remove(_variables.active)
    document.body.removeAttribute("style")

  })

}

modal()