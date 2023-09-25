## hexo-stackblitz-snippet

### 使用

基本使用

在md文件中插入代码

```
{% stackblitz [配置名1]:[值1] [配置名2]:[值2] %}

// eg
{% stackblitz project:xxxx %}
```

### 所有配置项
|配置名|值|
|:---:|:---:|
|project|具体见stackblitz,项目名称|
|style|html内联css样式|
|scrolling|见iframe标签属性|
|frameborder|见iframe标签属性|
|loading|见iframe标签属性|
|allowtransparency|见iframe标签属性|
|allowfullscreen|见iframe标签属性|

### 配置种类


优先级：引用配置 > hexo博客全局配置 > 插件内部默认配置

高优先级的配置会覆盖掉底优先级的配置

#### 引用配置

在md文件中插入代码中配置

```
    {% stackblitz [配置名1]:[值1] [配置名2]:[值2] %}
```

#### hexo博客全局配置

在博客_config.yml文件中配置

```
    # stackblitz
    stackblitz:
    project: '项目名称'
```

#### 插件内部默认配置

这是根据作者使用习惯内置在插件中的配置

具体配置情况如下：

```
    // 内置默认配置
    const default_config = {
        style: 'height: 256px; width: 100%;',
        scrolling: 'no',
        frameborder: 'no',
        loading: 'lazy',
        allowtransparency: 'true',
        allowfullscreen: 'true'
    }
```