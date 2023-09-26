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
    title
  } = config
  return `<a href="https://stackblitz.com/edit/${project}"
    target="_blank" alt="${title}" style="${style}"
  >${title}</a>`
})
