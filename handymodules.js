define([
{
  "name": "base-ui",
  "version": "2.0.0",
  "root": "handy",
  "description": "base-ui for alipay",
  "homepage": "http://handyjs.github.io/base-ui/",
  "author": "fool2fish, swain",
  "repository": {
    "type": "git",
    "url": "https://github.com/handyjs/base-ui"
  },
  "bugs": {
    "url": "https://github.com/handyjs/base-ui/issues"
  },
  "license": "MIT",
  "output": {
  },
  "tag": "ui",
  "devDependencies": {
    "grunt": "~0.4.1",
    "grunt-contrib-less": "~0.5.0",
    "grunt-contrib-watch": "~0.3.1"
  }
},
{
  "name": "base",
  "version": "1.0.0",
  "root": "handy",
  "description": "移动Web开发的基础样式和脚本",
  "homepage": "https://github.com/handyjs/base",
  "author": "Denis",
  "repository": {
    "type": "git",
    "url": "git@github.com:handyjs/base.git"
  },
  "bugs": {
    "url": "https://github.com/handyjs/base/issues"
  },
  "license": "MIT",
  "tests": ["base"],
  "output": {
    "css/reset.css": ["css/reset.css"],
    "js/detect.js": ["js/detect.js"],
    "js/viewport.js": ["js/viewport.js"]
  }
},
{
  "family": "handy",
  "name": "iscroll",
  "version": "1.0.0",
  "description": "",
  "homepage": "https://github.com/handyjs/iscroll",
  "keywords": ["scroll"],
  "repository": {
    "type": "git",
    "url": "https://github.com/handyjs/iscroll.git"
  },
  "bugs": {
    "url": "https://github.com/handyjs/iscroll/issues"
  },
  "devDependencies": {
    "grunt": "~0.4.1",
    "grunt-cmd-transport": "~0.1.1",
    "grunt-contrib-jshint": "~0.1.1",
    "grunt-contrib-uglify": "~0.2.0",
    "grunt-contrib-concat": "~0.1.3"
  },
  "spm": {
    "alias": {
      "$": "$"
    }
  }
},
{
  "name": "dialog",
  "version": "1.0.0",
  "root": "handy",
  "description": "基于移动设备的遮罩弹窗组件。",
  "tag": "widget",
  "author": "Denis <danxia.shidx@alipay.com>",
  "homepage": "https://github.com/handyjs/dialog",
  "repository": {
    "type": "git",
    "url": "https://github.com/handyjs/dialog"
  },
  "bugs": {
    "url": "https://github.com/handyjs/dialog/issues"
  },
  "dependencies": {
    "$": "$",
    "widget": "arale/widget/1.0.3/widget"
  },
  "output": {
    "js/dialog.js": ".",
    "css/dialog.css": "."
  }
},
{
  "name": "autocomplete",
  "version": "1.0.0",
  "root": "handy",
  "description": "基于Zepto的移动端轻量级Autocomplete组件",
  "homepage": "https://github.com/handyjs/autocomplete",
  "author": "daxia.shidx <danxia.shidx@alipay.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/handyjs/autocomplete.git"
  },
  "bugs": {
    "url": "https://github.com/handyjs/autocomplete/issues"
  },
  "license": "MIT",
  "dependencies": {
    "$": "$",
    "widget": "arale/widget/1.0.3/widget",
    "detect": "handy/base/1.0.0/js/detect"
  },
  "tests": ["autocomplete"],
  "output": {
    "js/autocomplete.js": "."
  }
},
{
  "family": "handy",
  "name": "jquto",
  "version": "1.0.0",
  "description": "基于jQuery和Zepto的移动基础类库",
  "homepage": "https://github.com/handyjs/jquto",
  "keywords": ["jquto", "jquery", "Zepto"],
  "repository": {
    "type": "git",
    "url": "https://github.com/handyjs/jquto.git"
  },
  "bugs": {
    "url": "https://github.com/handyjs/jquto/issues"
  },
  "devDependencies": {
    "grunt": "~0.4.1",
    "grunt-compare-size": "~0.4.0",
    "grunt-cmd-transport": "~0.1.1",
    "grunt-contrib-jshint": "~0.1.1",
    "grunt-contrib-uglify": "~0.2.0",
    "grunt-contrib-concat": "~0.1.3",
    "gzip-js": "0.3.1"
  },
  "spm": {
    "alias": {
      "$": "$"
    }
  }
},
{
  "name": "page-transitions",
  "root": "handy",
  "version": "1.0.0",
  "description": "页面切换动画组件",
  "author": "daxia.shidx <danxia.shidx@alipay.com>",
  "homepage": "https://github.com/handyjs/page-transitions",
  "repository": {
    "type": "git",
    "url": "https://github.com/handyjs/page-transitions.git"
  },
  "bugs": {
    "url": "https://github.com/handyjs/page-transitions/issues"
  },
  "dependencies": {
    "$": "$",
    "detect": "handy/base/1.0.0/js/detect"
  },
  "output": {
    "js/page-transitions.js": ".",
    "css/page-transitions.css": "."
  }
}
])
