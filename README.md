# hexo-change-img-url

using absolute path for assets in posts. 
enabling hexo `post_asset_folder` only makes the relative asset path work in post page, while in other page like index,category and tag the path will broken.


## Installation

```
npm install --save hexo-change-img-url
```

## Usage
- install package
- enable `post_asset_folder` in your hexo config file `_config.yml`
- reference assets in relative path in your post

## Example

```markdown
![this is the cover](./images/cover.jpg)
![this is the cover](images/cover.jpg)
```
the above will produce:
```html
<img title="this is the cover" src="/images/cover.jpg">
```

## Others
- [创建发布自己的npm包](https://www.cnblogs.com/marymei0107/p/6339710.html)
- [参考hexo-filter-pathfix](https://github.com/wayou/hexo-filter-pathfix)
