// Imagine that import has been monkey patched by webpack
// or this was called webpackImport and it's less weird
import "./main.css";

import buildComponent from "./component";

document.body.appendChild(buildComponent());
