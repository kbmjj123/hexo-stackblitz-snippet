/* global hexo */

hexo.extend.tag.register("stackblitz", (args) => {
  // 内置默认配置
  const default_config = {
    style: "height: 256px; width: 100%;",
    scrolling: "no",
    frameborder: "no",
    loading: "lazy",
    allowtransparency: "true",
    allowfullscreen: "true",
  }

  const config = { ...default_config, ...hexo.config.stackblitz }
  args.forEach((arg) => {
    const buf = arg.split(":")
    config[buf[0]] = buf[1]
  })

  const {
    project,
    ctl,
    hideNavigation,
    hideExplorer,
    style,
    scrolling,
    frameborder,
    loading,
    allowtransparency,
    allowfullscreen,
  } = config
  return `<iframe 
              src="https://stackblitz.com/edit/${project}?ctl==${ctl}&hideExplorer=${hideExplorer}&hideNavigation=${hideNavigation}" 
              style="${style}"
              scrolling=${scrolling} 
              frameborder=${frameborder} 
              loading=${loading}
              allowtransparency=${allowtransparency}
              allowfullscreen=${allowfullscreen}
          >
          </iframe>`
})
