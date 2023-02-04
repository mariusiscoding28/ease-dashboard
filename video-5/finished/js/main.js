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

// Modal
const modal = () => {

  const _variables = {
    target: "data-modal-target",
    active: "e-active",
  }

  document.addEventListener("click", (e) => {

    const target = e.target.closest(`[${_variables.target}]`)

    if (!target) return

    const targetId = target.getAttribute(_variables.target)
    const modal = document.querySelector(`#${targetId}`)

    if (!modal) return

    modal.classList.add(_variables.active)
    document.body.style.overflow = "hidden"

  })

  window.addEventListener("mouseup", e => {
    const target = e.target.closest(`[${_variables.target}]`) || e.target.closest(`.ease-modal-inner`)

    if (target) return
    const modal = e.target.closest(".ease-modal")

    if (!modal || modal && !modal.classList.contains(_variables.active)) return

    modal.classList.remove(_variables.active)
    document.body.removeAttribute("style")
  })

}

modal()

const progress = () => {
  const _variables = {
    main: [...document.querySelectorAll(".ease-progress")],
    inner: "ease-progress__inner",
    target: "data-current-progress",
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
  const easeProject = document.querySelector("#ease-project");

  const easeProjectColors = ["#dddde2", "#add4b8", "#bdbfff", "#c098a2"]

  const data = {
    labels: ['Sept - Oct', 'Nov - Dec', 'Jan - Feb'],
    datasets: [
      {
        label: 'Total',
        data: [125, 200, 576],
        borderWidth: 1,
        backgroundColor: easeProjectColors[0],
        borderColor: easeProjectColors[0],
      },
      {
        label: 'Completed',
        data: [120, 185, 243],
        borderWidth: 1,
        backgroundColor: easeProjectColors[1],
        borderColor: easeProjectColors[1],
      },
      {
        label: 'In progress',
        data: [5, 10, 102],
        borderWidth: 1,
        backgroundColor: easeProjectColors[2],
        borderColor: easeProjectColors[2],
      },
      {
        label: 'Delayed / canceled',
        data: [0, 5, 231],
        borderWidth: 1,
        backgroundColor: easeProjectColors[3],
        borderColor: easeProjectColors[3],
      },
    ]
  }

  if (easeProject) new Chart(easeProject, {
    type: 'bar',
    data: data,
    options: {
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  });

  // Project earnings
  const easeProjectEarn = document.querySelector("#ease-earnings");

  const easeProjectEarnColors = ["#bdbfff", "#c098a2", "#add4b8", "#fdc4a1"]

  const dataEarn = {
    labels: ['Web / Mobile Applications', 'Branding / Marketing', 'Financial Analysis / Web / Mobile', 'Consultation'],
    datasets: [
      {
        data: [13243, 6234, 10423, 11423],
        borderWidth: 1,
        backgroundColor: easeProjectEarnColors,
        borderColor: easeProjectEarnColors,
      },

    ]
  }

  if (easeProjectEarn) new Chart(easeProjectEarn, {
    type: 'doughnut',
    data: dataEarn,
    options: {
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  });

  // ECommerce 
  // Revenue
  const easeStoreRevenue = document.querySelector("#ease-revenue");
  const easeRevenueColors = ["rgba(221, 221, 226, 0.25)", "rgba(192, 152, 162, 0.35)", "rgba(173, 212, 184, 0.45)", "rgba(253, 196, 161, 0.55)"]
  const dataRevenue = {
    labels: ['Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: "Total orders",
        data: [546, 241, 689, 1907, 6532, 679],
        borderWidth: 1,
        backgroundColor: easeRevenueColors,
        borderColor: easeRevenueColors,
        borderCapStyle: "round",
        borderJoinStyle: "round",
        fill: {
          target: "origin",
          below: "#bdbfff",
        }
      },
      {
        label: "Revenue",
        data: [1678, 1321, 4907, 5672, 3905, 4230],
        borderWidth: 1,
        backgroundColor: easeRevenueColors,
        borderColor: easeRevenueColors,
        borderCapStyle: "round",
        borderJoinStyle: "round",
        fill: {
          target: "origin",
          below: "#bdbfff",
        }
      },
      {
        label: "Refunded",
        data: [205, 600, 783, 200, 907, 1232],
        borderWidth: 1,
        backgroundColor: easeRevenueColors,
        borderColor: easeRevenueColors,
        borderCapStyle: "round",
        borderJoinStyle: "round",
        fill: {
          target: "origin",
          below: "#bdbfff",
        }
      },
      {
        label: "Daily profit",
        data: [321, 212, 1002, 4017, 6732, 2531],
        borderWidth: 1,
        backgroundColor: easeRevenueColors,
        borderColor: easeRevenueColors,
        borderCapStyle: "round",
        borderJoinStyle: "round",
        fill: {
          target: "origin",
          below: "#bdbfff",
        }
      },

    ]
  }

  if (easeStoreRevenue) new Chart(easeStoreRevenue, {
    type: 'line',
    data: dataRevenue,
    options: {
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  });

}

easeChart()

const communicationComponents = () => {

  const _variables = {
    communicationTarget: "data-communication-target",
    mainCommBox: "ease-message-center",
    closeCommBoxTarget: document.querySelector("[data-close-target]"),
    modalColumn: "ease-communication-data-modal",
    active: "e-active",
  }

  // Opening the message box
  document.addEventListener("click", e => {
    const target = e.target.closest(`[${_variables.communicationTarget}]`)

    if (!target) return

    e.preventDefault()

    const targetId = target.getAttribute(_variables.communicationTarget)
    const messageBox = document.querySelector(`#${targetId}`)

    if (messageBox) messageBox.classList.add(_variables.active)
  })

  // Closing the message box
  if (_variables.closeCommBoxTarget) _variables.closeCommBoxTarget.addEventListener("click", () => {
    const targetId = (_variables.closeCommBoxTarget) ? _variables.closeCommBoxTarget.getAttribute("data-close-target") : null
    const messageBox = document.querySelector(`#${targetId}`)

    if (messageBox) messageBox.classList.remove(_variables.active)
  })

  const messageBox = document.querySelector(`#${_variables.mainCommBox}`)
  const communicationModal = document.querySelector(`.${_variables.modalColumn}`)

  // Showing the modal on larger screen devices
  let resizing, winWidth;
  window.addEventListener("resize", (e) => {
    clearTimeout(resizing)
    resizing = setTimeout(updateModalOnResize, 500)
  })

  function updateModalOnResize() {
    winWidth = window.innerWidth
    let messageBoxHeight;

    // Added the "OR" statement after the creating the "Inbox page"

    if (winWidth < 1281 || communicationModal.closest(".ease-communication-modal").classList.contains("ease-inbox-modal")) return communicationModal.style.height = null

    // Get the message box height
    if (!messageBox) return
    messageBoxHeight = messageBox.clientHeight
    communicationModal.style.height = messageBoxHeight + "px"
  }

  updateModalOnResize()

  // Update message box column

  document.addEventListener("click", (e) => {

    const commModal = document.querySelector(`#ease-message-user-data`)

    if (winWidth < 1281 || communicationModal.closest(".ease-communication-modal").classList.contains("ease-inbox-modal")) return

    if (!commModal.classList.contains(_variables.active)) {

      messageBox.classList.add("e-flex-md-8", "e-flex-lg-9")
      messageBox.classList.remove("e-flex-md-4", "e-flex-lg-6")

      return
    }

    messageBox.classList.remove("e-flex-md-8", "e-flex-lg-9")
    messageBox.classList.add("e-flex-md-4", "e-flex-lg-6")
    setTimeout(updateModalOnResize, 250)

  })

}

communicationComponents()