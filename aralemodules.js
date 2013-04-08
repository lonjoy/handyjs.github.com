define([{
  "name": "widget",
  "version": "1.0.3",
  "root": "arale",
  "description": "Widget 是 UI 组件的基础类，约定了组件的基本生命周期，实现了一些通用功能。基于 Widget 可以构建出任何你想要的 Web 界面组件。",
  "tag": "infrastructure",
  "homepage": "http://aralejs.org/widget",
  "repository": {
    "type": "git",
    "url": "https://github.com/aralejs/widget.git"
  },
  "bugs": {
    "url": "https://github.com/aralejs/widget/issues"
  },
  "dependencies": {
    "$": "$",
    "handlebars": "gallery/handlebars/1.0.0/handlebars",
    "base": "arale/base/1.0.1/base"
  },
  "output": {
    "widget.js": ".",
    "templatable.js": "."
  },
  "tests": [
    "daparser",
    "widget",
    "templatable"
  ]
}
,{
    "name": "validator",
    "version": "0.9.2",
    "root": "arale",
    "author": "Shawn <shaoshuai0102@gmail.com>",
    "tag": "widget",
    "description": "不错的表单校验组件。",
    "license": "MIT",
    "tests": ["rules", "core", "core2", "validator"],
    "output": {
        "core.js": ".",
        "validator.js": ["./validator.js"]
    },
    "dependencies": {
        "$":"$",
        "widget": "arale/widget/1.0.3/widget"
    },
    "deploy": {
        "server": "dev",
        "host": "assets.p501.alipay.net",
        "path": "/home/admin/wwwroot/assets/"
    },
    "repository": {
        "type": "git",
        "url": "https://github.com/aralejs/validator"
    },
    "bugs": {
        "email": "shaoshuai0102@gmail.com",
        "url": "https://github.com/aralejs/validator/issues"
    }
}
,{
  "name": "class",
  "family": "arale",
  "version": "1.0.0",
  "keywords": ["infrastructure"],
  "description": "提供简洁的 OO 实现。",
  "homepage": "http://aralejs.org/class/",
  "repository": {
    "type": "git",
    "url": "https://github.com/aralejs/class.git"
  },
  "bugs": {
    "url": "https://github.com/aralejs/class/issues"
  },
  "spm": {
    "output": ["class.js"]
  }
}
,{
  "name": "base",
  "root": "arale",
  "description": "Base 是一个基础类，提供 Class、Events、Attribute 和 Aspect 支持。",
  "version": "1.0.1",
  "tag": "infrastructure",
  "homepage": "http://aralejs.org/base",
  "repository": {
    "type": "git",
    "url": "https://github.com/aralejs/base.git"
  },
  "bugs": {
    "url": "https://github.com/aralejs/base/issues"
  },
  "dependencies": {
    "class": "arale/class/1.0.0/class",
    "events": "arale/events/1.0.0/events"
  },
  "tests": ["base"],
  "output": {
    "base.js": "."
  }
}
,{
    "name": "events",
    "root": "arale",
    "version": "1.0.0",
    "description": "提供基本的事件添加、移除和触发功能。",
    "tag": "infrastructure",
    "homepage": "http://aralejs.org/events/",
    "repository": {
        "type": "git",
        "url": "https://github.com/aralejs/events.git"
    },
    "bugs": {
        "url": "https://github.com/aralejs/events/issues"
    },
    "output": {
        "events.js": "."
    },
    "tests": ["events"]
}
,{
  "name": "async",
  "family": "gallery",
  "description": "Higher-order functions and common patterns for asynchronous code",
  "main": "./lib/async",
  "author": "Caolan McMahon",
  "version": "0.2.3",
  "homepage" : "http://github.com/caolan/async",
  "package": "https://raw.github.com/caolan/async/master/package.json",
  "repository" : {
    "type" : "git",
    "url" : "http://github.com/caolan/async.git"
  },
  "bugs" : {
    "url" : "http://github.com/caolan/async/issues"
  },
  "licenses" : [
    {
      "type" : "MIT",
      "url" : "http://github.com/caolan/async/raw/master/LICENSE"
    }
  ],
  "spm": {
    "output": {
      "async.js": "async.js"
    }
  }
}
,{
  "name": "backbone",
  "root": "gallery",
  "description": "Give your JS App some Backbone with Models, Views, Collections, and Events.",
  "homepage": "http://backbonejs.org",
  "keywords": ["model", "view", "controller", "router", "server", "client", "browser"],
  "author": "Jeremy Ashkenas <jeremy@documentcloud.org>",
  "package": "https://raw.github.com/documentcloud/backbone/master/package.json",
  "spm": {
    "alias": {
      "$": "$",
      "underscore": "gallery/underscore/1.4.4/underscore"
    }
  },
  "main": "backbone.js",
  "version": "0.9.10"
}
,{
  "name": "coffee",
  "root": "gallery",
  "description": "Unfancy JavaScript",
  "keywords": ["javascript", "language", "coffeescript", "compiler"],
  "author": "Jeremy Ashkenas",
  "version": "1.4.0",
  "package": "https://raw.github.com/jashkenas/coffee-script/master/package.json",
  "licenses": [{
    "type": "MIT",
    "url": "https://raw.github.com/jashkenas/coffee-script/master/LICENSE"
  }],
  "main": "./lib/coffee-script/coffee-script",
  "homepage": "http://coffeescript.org",
  "bugs": {
    "url": "https://github.com/jashkenas/coffee-script/issues"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/jashkenas/coffee-script.git"
  },
  "output": {
    "coffee-script.js": "."
  }
}
,{
  "family": "gallery",
  "name": "expect",
  "version": "0.2.0",
  "package": "https://raw.github.com/LearnBoost/expect.js/master/package.json",
  "description": "BDD style assertions for node and the browser.",
  "homepage": "https://github.com/LearnBoost/expect.js",
  "repository": {
    "type": "git",
    "url": "https://github.com/LearnBoost/expect.js"
  },
  "spm": {
    "output": ["expect.js"]
  }
}
,{
  "family": "gallery",
  "name": "handlebars",
  "description": "Extension of the Mustache logicless template language",
  "version": "1.0.0",
  "version2": "1.0.0-rc.3",
  "package": "https://raw.github.com/wycats/handlebars.js/master/package.json",
  "homepage": "http://www.handlebarsjs.com/",
  "keywords": [
    "handlebars", "mustache", "template", "html"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/wycats/handlebars.js"
  },
  "main": "lib/handlebars.js",
  "spm": {
    "output": ["handlebars.js", "runtime.js"]
  }
}
,{
  "name": "jquery",
  "root": "gallery",
  "type": "transport",
  "description": "JavaScript library for DOM operations",
  "version": "1.9.1",
  "package": "https://raw.github.com/jquery/jquery/master/package.json",
  "homepage": "http://jquery.com",
  "author": {
    "name": "jQuery Foundation and other contributors",
    "url": "https://github.com/jquery/jquery/blob/master/AUTHORS.txt"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/jquery/jquery.git"
  },
  "bugs": {
    "url": "http://bugs.jquery.com"
  },
  "licenses": [{
    "type": "MIT",
    "url": "https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt"
  }]
}
,{
  "root": "gallery",
  "name": "json",
  "version": "1.0.2",
  "description": "JSON in JavaScript.",
  "author": "Douglas Crockford",
  "homepage": "http://www.JSON.org/",
  "output": {
    "json.js": "."
  }
}
,{
  "root": "gallery",
  "name": "labjs",
  "version": "2.0.3",
  "description": "Loading And Blocking JavaScript.",
  "author": "Kyle Simpson",
  "homepage": "http://labjs.com/",
  "keywords": "loader",
  "output": {
    "lab.js": "."
  }
}
,{
  "name": "less",
  "root": "gallery",
  "version": "1.3.1",
  "package": "https://raw.github.com/cloudhead/less.js/master/package.json",
  "description": "Leaner CSS",
  "homepage": "http://lesscss.org",
  "keywords": ["css", "parser", "lesscss", "browser"],
  "author": "Alexis Sellier <self@cloudhead.net>",
  "contributors": [],
  "bin": {
    "lessc": "./bin/lessc"
  },
  "main": "./lib/less/index",
  "output": {
    "less.js": "."
  }
}
,{
  "name": "marked",
  "root": "gallery",
  "version": "0.2.6",
  "package": "https://raw.github.com/chjj/marked/master/package.json",
  "description": "A markdown parser built for speed",
  "author": "Christopher Jeffrey",
  "main": "./lib/marked.js",
  "bin": "./bin/marked",
  "man": "./man/marked.1",
  "preferGlobal": false,
  "repository": {
    "type": "git",
    "url": "https://github.com/chjj/marked"
  },
  "homepage": "https://github.com/chjj/marked",
  "bugs": { "url": "http://github.com/chjj/marked/issues" },
  "keywords": [ "markdown", "markup", "html" ],
  "tags": [ "markdown", "markup", "html" ],
  "scripts": { "test": "node test", "bench": "node test --bench" },
  "output": {
    "marked.js": "."
  }
}
,{
  "name": "moment",
  "family": "gallery",
  "version": "2.0.0",
  "package": "https://raw.github.com/timrwood/moment/master/package.json",
  "description": "Parse, manipulate, and display dates.",
  "homepage": "http://momentjs.com",
  "author": "Tim Wood <washwithcare@gmail.com> (http://timwoodcreates.com/)",
  "contributors": [
    "Rocky Meza (http://rockymeza.com)"
  ],
  "keywords": [
    "moment",
    "date",
    "time",
    "parse",
    "format",
    "validate",
    "i18n",
    "l10n",
    "ender"
  ],
  "main": "./moment.js",
  "repository": {
    "type": "git",
    "url": "https://github.com/timrwood/moment.git"
  },
  "bugs": {
    "url": "https://github.com/timrwood/moment/issues"
  },
  "licenses" : [
    {
      "type" : "MIT"
    }
  ],
  "spm": {
    "output": ["moment.js"]
  }
}
,{
  "name": "mustache",
  "family": "gallery",
  "version": "0.7.2",
  "package": "https://raw.github.com/janl/mustache.js/master/package.json",
  "description": "Logic-less {{mustache}} templates with JavaScript",
  "author": "mustache.js Authors <http://github.com/janl/mustache.js>",
  "keywords": ["mustache", "template", "templates", "ejs"],
  "main": "./mustache.js",
  "homepage": "http://mustache.github.com/",
  "repository": {
    "type": "git",
    "url": "https://github.com/janl/mustache.js"
  },
  "spm": {
    "output": {
      "mustache.js": ["mustache.js"]
    }
  }
}
,{
  "family": "gallery",
  "name": "morris",
  "version": "0.4.1",
  "homepage": "http://oesmith.github.com/morris.js",
  "description": "Easy, pretty charts",
  "author": {
    "name": "Olly Smith",
    "email": "olly@oesmith.co.uk"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/oesmith/morris.js.git"
  },
  "bugs": {
    "url": "https://github.com/oesmith/morris.js/issues"
  },
  "devDependencies": {
    "grunt-coffee": "~> 0.0.6",
    "grunt-mocha": "~> 0.1.7",
    "grunt-contrib-less": "~> 0.3.2",
    "grunt": "~> 0.3.17"
  },
  "scripts": {
    "test": "./node_modules/.bin/grunt coffee mocha"
  }
}
,{
  "name": "store",
  "root": "gallery",
  "version": "1.3.6",
  "package": "https://raw.github.com/marcuswestin/store.js/master/package.json",
  "description": "A localStorage wrapper for all browsers without using cookies or flash. Uses localStorage, globalStorage, and userData behavior under the hood",
  "homepage": "https://github.com/marcuswestin/store.js",
  "author": "Marcus Westin <narcvs@gmail.com> (http://marcuswest.in)",
  "contributors": [
    "Matt Pizzimenti <mjpizz+github@gmail.com> (http://mjpizz.com)",
    "Long Ouyang (https://github.com/longouyang)",
    "Paul Irish (http://paulirish.com)",
    "Guillermo Rauch <rauchg@gmail.com> (https://github.com/guille)",
    "whitmer (https://github.com/whitmer)",
    "Steven Black <steveb@stevenblack.com> (https://github.com/StevenBlack)",
    "Marcus Tucker <info@marcustucker.com> (https://github.com/MarcusJT)",
    "Leonid Bugaev <leonsbox@gmail.com> (https://github.com/buger)",
    "Per Eckerdal <per.eckerdal@gmail.com> (https://github.com/pereckerdal)",
    "Fredrik Blomqvist (https://github.com/blq)"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/marcuswestin/store.js"
  },
  "bugs": {
    "url": "http://github.com/marcuswestin/store.js/issues"
  },
  "engines": {
    "browser": "*",
    "node": "*"
  },
  "licenses": [
    {
      "type": "MIT",
      "url": "https://raw.github.com/marcuswestin/store.js/master/store.js"
    }
  ],
  "main": "store",
  "directories": {
    "lib": "."
  },
  "output": {
    "store.js": "."
  }
}
,{
  "root": "gallery",
  "name": "swfobject",
  "version": "2.3.0",
  "description": "SWFObject is an easy-to-use and standards-friendly method to embed Flash content, which utilizes one small JavaScript file.",
  "author": "https://github.com/swfobject",
  "homepage": "https://github.com/swfobject/swfobject",
  "repository": {
    "type": "git",
    "url": "https://github.com/swfobject/swfobject.git"
  },
  "output": {
    "swfobject.js": ".",
    "expressInstall.swf": "https://github.com/swfobject/swfobject/raw/master/swfobject/expressInstall.swf"
  }
}

,{
    "name": "underscore",
    "root": "gallery",
    "family": "gallery",
    "version": "1.4.4",
    "package": "https://raw.github.com/documentcloud/underscore/master/package.json",
    "description": "JavaScript's functional programming helper library.",
    "homepage": "http://underscorejs.org",
    "keywords": ["util", "functional", "server", "client", "browser"],
    "author": "Jeremy Ashkenas <jeremy@documentcloud.org>",
    "repository": {
        "type": "git",
        "url": "https://github.com/documentcloud/underscore.git"
    },
    "main": "underscore.js"
}
,{
  "name": "zepto",
  "family": "gallery",
  "root": "gallery",
  "version": "1.0.2",
  "author": "Thomas Fuchs",
  "homepage": "http://zeptojs.com/",
  "description": "Zepto is a minimalist JavaScript framework for modern browsers with a largely jQuery-compatible API.",
  "repository": {
    "type": "git",
    "url": "https://github.com/madrobby/zepto.git"
  },
  "output": {
    "zepto.js": "."
  }
}
,{
  "name": "es5-safe",
  "root": "gallery",
  "version": "0.9.2",
  "package": "https://raw.github.com/lifesinger/dew/master/lib/es5-safe/package.json",
  "description": "Provides compatibility shims so that legacy JavaScript engines behave as closely as possible to ES5.",
  "homepage": "https://github.com/lifesinger/dew/tree/master/lib/es5-safe",
  "keywords": ["util"],
  "author": "Frank Wang <lifesinger@gmail.com>",
  "output": {
    "es5-safe.js": "."
  }
}
,{
  "name": "jsuri",
  "root": "gallery",
  "version": "1.2.2",
  "package": "https://raw.github.com/derek-watson/jsUri/master/package.json",
  "author": "Derek Watson <watson@dcw.ca> (http://dcw.ca)",
  "description": "Uri and query string manipulation",
  "homepage": "https://github.com/derek-watson/jsUri",
  "repository": {
    "type": "git",
    "url": "git://github.com/derek-watson/jsUri.git"
  },
  "keywords": [
    "uri",
    "url",
    "query",
    "path"
  ],
  "main": "Uri",
  "scripts": {
    "test": "jake test"
  },
  "dependencies": {},
  "optionalDependencies": {},
  "engines": {
    "node": "*"
  },
  "output": {
    "jsuri.js": "."
  }
}
,{
  "name": "ztree",
  "root": "gallery",
  "version": "3.5.2",
  "package": "https://raw.github.com/swain/zTree/master/package.json",
  "description": "A jQuery tree plugin",
  "author": "zTree",
  "repository": {
    "type": "git",
    "url": "https://github.com/swain/zTree"
  },
  "homepage": "https://github.com/swain/zTree",
  "bugs": {
    "url": "https://github.com/swain/zTree/issues"
  },
  "dependencies": {
    "$": "$"
  },
  "output": {
    "ztree.js": ["ztree.js"],
    "core.js": ["core.js"],
    "excheck.js": ["excheck.js"],
    "exedit.js": ["exedit.js"],
    "exhide.js": ["exhide.js"]
  }
}
,{
  "name": "mocha",
  "family": "gallery",
  "version": "1.8.2",
  "package": "https://raw.github.com/visionmedia/mocha/master/package.json",
  "description": "simple, flexible, fun test framework",
  "keywords": ["test", "bdd", "tdd", "tap"],
  "author": "TJ Holowaychuk <tj@vision-media.ca>",
  "homepage": "http://visionmedia.github.com/mocha/",
  "repository": {
    "type": "git",
    "url": "git://github.com/visionmedia/mocha.git"
  },
  "spm": {
    "output": []
  }
}
,{
  "name": "keymaster",
  "family": "gallery",
  "version": "1.0.2",
  "package": "https://raw.github.com/madrobby/keymaster/master/package.json",
  "homepage": "https://github.com/madrobby/keymaster",
  "description": "library for defining and dispatching keyboard shortcuts",
  "author": "Thomas Fuchs <> (http://mir.aculo.us)",
  "repository": {
    "type": "git",
    "url": "https://github.com/madrobby/keymaster"
  },
  "main": "./keymaster.js",
  "spm": {
    "output": ["keymaster.js"]
  }
}
,{
  "name": "html5shiv",
  "root": "gallery",
  "version": "3.6.1",
  "author": "aFarkas",
  "homepage": "http://paulirish.com/2011/the-history-of-the-html5-shiv/",
  "description": "This script is the defacto way to enable use of HTML5 sectioning elements in legacy Internet Explorer.",
  "repository": {
    "type": "git",
    "url": "https://github.com/aFarkas/html5shiv.git"
  }
}
,{
    "root": "gallery",
    "name": "impress",
    "version": "0.5.3",
    "description": "It's a presentation framework based on the power of CSS3 transforms and transitions in modern browsers and inspired by the idea behind prezi.com.",
    "author": "Bartek Szopka",
    "homepage": "http://bartaz.github.com/impress.js",
    "output": {
        "impress.js": "."
    }
}
,{
    "name": "juicer",
    "root": "gallery",
    "version": "0.6.4",
    "package": "https://raw.github.com/PaulGuo/Juicer/master/package.json",
    "description": "A High-performance Lightweight JavaScript Template Engine",
    "author": "juicer.js Authors <badkaikai@gmail.com | http://benben.cc>",
    "keywords": ["juicer", "template", "templates", "juicerjs", "engine", "javascript"],
    "main": "./juicer.js",
    "homepage": "http://juicer.name/",
    "repository": {
        "type": "git",
        "url": "git@github.com:PaulGuo/Juicer.git"
    },
    "output": {
        "juicer.js": "."
    }
}
,{
    "name": "zeroclipboard",
    "version": "1.1.6",
    "root": "gallery",
    "description": "The Zero Clipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie, and a JavaScript interface.",
    "keywords": [
      "flash",
      "clipboard",
      "copy",
      "paste"
    ],
    "homepage": "http://jonrohan.github.com/ZeroClipboard/",
    "repository": {
      "type": "git",
      "url": "https://github.com/jonrohan/ZeroClipboard.git"
    },    
    "license": "MIT",
    "output": {
        "zeroclipboard.js": ".",
        "ZeroClipboard.swf": "./ZeroClipboard.swf"
    }
}
,{
  "name": "scrollmonitor",
  "root": "gallery",
  "version": "1.0.0",
  "author": "Stu Kabakoff <stukabakoff@gmail.com>",
  "homepage": "https://github.com/sakabako/scrollMonitor",
  "description": "A simple and fast API to monitor DOM elements as you scroll",
  "contributors": [
    {
    "name": "Stu Kabakoff",
    "email": "stukabakoff@gmail.com"
    },
    {
    "name": "Terrence Lee",
    "email": "mr.lee@terrenceishere.com"
    }
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/sakabako/scrollMonitor.git"
  },
  "keywords": [
    "scroll",
    "dom"
  ],
  "output": {
    "scrollmonitor.js": "."
  }
}
])
