/* global hexo */

hexo.extend.tag.register("stackblitz", (args) => {
  // 内置默认配置
  const default_config = {
    style: "height: 456px; width: 100%;",
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
    style,
    scrolling,
    frameborder,
    allowtransparency,
    allowfullscreen,
  } = config
  return `<iframe 
              src="https://stackblitz.com/edit/${project}" 
              style="${style}"
              frameborder=${frameborder} 
              sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          >
          </iframe>`
})
