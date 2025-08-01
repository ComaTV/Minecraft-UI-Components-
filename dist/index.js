'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function Button({
  label,
  variant = 'default',
  width = 'auto',
  height = 'auto',
  font = 'MinecraftRegular',
  disabled = false,
  loading = false,
  icon = null,
  iconPosition = 'left',
  onClick,
  className = '',
  style,
  fullWidth = false,
  type = 'button'
}) {
  const getButtonClasses = () => {
    const classes = ['btn', variant];
    if (disabled) classes.push('disabled');
    if (loading) classes.push('loading');
    if (fullWidth) classes.push('full-width');
    if (font === 'MinecraftTen') classes.push('font-ten');
    if (className) classes.push(className);
    return classes.join(' ');
  };
  const getButtonStyle = () => {
    const baseStyle = {
      fontFamily: font
    };
    if (width !== 'auto') {
      baseStyle.width = typeof width === 'number' ? `${width}px` : width;
    }
    if (height !== 'auto') {
      baseStyle.height = typeof height === 'number' ? `${height}px` : height;
      baseStyle.minHeight = typeof height === 'number' ? `${height}px` : height;
    }
    return {
      ...baseStyle,
      ...style
    };
  };
  const renderIcon = () => {
    if (!icon) return null;
    const iconElement = typeof icon === 'string' ? /*#__PURE__*/React.createElement("img", {
      src: icon,
      alt: "",
      className: "btn-icon"
    }) : icon;
    return /*#__PURE__*/React.createElement("span", {
      className: `btn-icon-wrapper ${iconPosition}`
    }, iconElement);
  };
  const renderContent = () => {
    if (loading) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: "btn-loading-spinner"
      }), /*#__PURE__*/React.createElement("span", {
        className: "btn-loading-text"
      }, label));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, iconPosition === 'left' && renderIcon(), /*#__PURE__*/React.createElement("span", {
      className: "btn-text"
    }, label), iconPosition === 'right' && renderIcon());
  };
  return /*#__PURE__*/React.createElement("button", {
    className: getButtonClasses(),
    disabled: disabled || loading,
    onClick: onClick,
    style: getButtonStyle(),
    type: type
  }, renderContent());
}

const Checkbox = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  className = ''
}) => {
  const handleChange = e => {
    if (disabled) return;
    if (onChange) {
      onChange(e.target.checked);
    }
  };
  const getWrapperClasses = () => {
    const classes = ['checkbox-wrapper'];
    if (disabled) classes.push('disabled');
    if (className) classes.push(className);
    return classes.join(' ');
  };
  return /*#__PURE__*/React.createElement("label", {
    className: getWrapperClasses()
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "checkbox-input",
    checked: checked,
    onChange: handleChange,
    disabled: disabled,
    id: id
  }), /*#__PURE__*/React.createElement("div", {
    className: "checkbox-visual"
  }), label && /*#__PURE__*/React.createElement("span", {
    className: "checkbox-label"
  }, label));
};

const Container = ({
  children,
  className = '',
  style = {},
  variant = 'default',
  size = 'default'
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'open':
        return 'pixel-container-open';
      case 'transparent':
        return 'pixel-container-transparent';
      case 'dark':
        return 'pixel-container-dark';
      case 'glass':
        return 'pixel-container-glass';
      case 'outlined':
        return 'pixel-container-outlined';
      case 'minimal':
        return 'pixel-container-minimal';
      case 'white':
        return 'pixel-container-white';
      case 'card':
        return 'pixel-container card';
      case 'form':
        return 'pixel-container form-container';
      case 'sidebar':
        return 'pixel-container sidebar';
      case 'modal':
        return 'pixel-container modal';
      default:
        return 'pixel-container';
    }
  };
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'small';
      case 'large':
        return 'large';
      case 'compact':
        return 'compact';
      default:
        return '';
    }
  };
  const containerClasses = [getVariantClass(), getSizeClass(), className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: containerClasses,
    style: style
  }, children);
};

function ContainerExample() {
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-8"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-gray-300 mb-6 text-sm"
  }, "Container Examples"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-gray-300 text-xs block mb-2"
  }, "Default Container"), /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm"
  }, "Acesta este containerul default cu stilul pixel art original."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-gray-300 text-xs block mb-2"
  }, "Container Deschis (Open)"), /*#__PURE__*/React.createElement(Container, {
    variant: "open"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm"
  }, "Container f\u0103r\u0103 fundal, doar cu border. Perfect pentru con\u021Binut care trebuie s\u0103 se integreze cu fundalul."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-gray-300 text-xs block mb-2"
  }, "Container Transparent"), /*#__PURE__*/React.createElement(Container, {
    variant: "transparent"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm"
  }, "Container negru cu fundal transparent \u0219i efect de blur. Ideal pentru overlay-uri \u0219i modal-uri."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-gray-300 text-xs block mb-2"
  }, "Container Dark"), /*#__PURE__*/React.createElement(Container, {
    variant: "dark"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm"
  }, "Container foarte \xEEntunecat pentru con\u021Binut care necesit\u0103 contrast maxim."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-gray-300 text-xs block mb-2"
  }, "Container Glass"), /*#__PURE__*/React.createElement(Container, {
    variant: "glass"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm"
  }, "Container cu efect de sticl\u0103 \u0219i blur. Modern \u0219i elegant."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-gray-300 text-xs block mb-2"
  }, "Container Outlined"), /*#__PURE__*/React.createElement(Container, {
    variant: "outlined"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm"
  }, "Container cu border dashed. Perfect pentru zone de drop sau placeholder-uri."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-gray-300 text-xs block mb-2"
  }, "Container Minimal"), /*#__PURE__*/React.createElement(Container, {
    variant: "minimal"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm"
  }, "Container foarte simplu cu border subtil. Pentru con\u021Binut care nu necesit\u0103 accent."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-gray-300 text-xs block mb-2"
  }, "Container White Mode"), /*#__PURE__*/React.createElement(Container, {
    variant: "white"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-900 text-sm"
  }, "Container cu fundal alb \u0219i linie gri la baz\u0103. Perfect pentru design-uri moderne \u0219i curate."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-gray-300 text-xs block mb-2"
  }, "Container Card"), /*#__PURE__*/React.createElement(Container, {
    variant: "card"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm"
  }, "Container cu stil de card, cu umbr\u0103 \u0219i aspect mai proeminent."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-gray-300 text-xs block mb-2"
  }, "Container Form"), /*#__PURE__*/React.createElement(Container, {
    variant: "form"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm"
  }, "Container special pentru formulare, cu fundal mai \xEEntunecat."))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-gray-300 text-xs block"
  }, "Diferite Dimensiuni"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-gray-300 text-xs block mb-2"
  }, "Small"), /*#__PURE__*/React.createElement(Container, {
    variant: "open",
    size: "small"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm"
  }, "Container mic"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-gray-300 text-xs block mb-2"
  }, "Large"), /*#__PURE__*/React.createElement(Container, {
    variant: "transparent",
    size: "large"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm"
  }, "Container mare cu mai mult spa\u021Biu"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-gray-300 text-xs block mb-2"
  }, "Compact"), /*#__PURE__*/React.createElement(Container, {
    variant: "minimal",
    size: "compact"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm"
  }, "Container compact")))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-gray-300 text-xs block"
  }, "Combina\u021Bii de Variante"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement(Container, {
    variant: "glass",
    size: "small"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm"
  }, "Glass + Small")), /*#__PURE__*/React.createElement(Container, {
    variant: "outlined",
    size: "large"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm"
  }, "Outlined + Large")), /*#__PURE__*/React.createElement(Container, {
    variant: "dark",
    size: "compact"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm"
  }, "Dark + Compact")), /*#__PURE__*/React.createElement(Container, {
    variant: "open",
    size: "default"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm"
  }, "Open + Default")))));
}

const Dropdown = ({
  header,
  label,
  options,
  onSelect,
  variant = 'default',
  focused = false,
  pressed = false,
  dark = false,
  disabled = false
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(label);
  const handleSelect = option => {
    if (disabled) return;
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };
  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };
  const getWrapperClasses = () => {
    const classes = ['dropdown-wrapper'];
    if (dark) classes.push('dark');
    if (disabled) classes.push('disabled');
    return classes.join(' ');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: getWrapperClasses()
  }, /*#__PURE__*/React.createElement("div", {
    className: `dropdown-select ${isOpen ? 'open' : ''}`,
    onClick: handleToggle
  }, /*#__PURE__*/React.createElement("span", {
    className: "dropdown-label"
  }, selectedOption), /*#__PURE__*/React.createElement("span", {
    className: "dropdown-chevron-text"
  }, "^")), isOpen && !disabled && /*#__PURE__*/React.createElement("div", {
    className: "dropdown-options"
  }, options.map((option, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: "dropdown-option",
    onClick: () => handleSelect(option)
  }, option))));
};

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

function ImageCard({
  imageSrc,
  label,
  description,
  iconImages = [],
  onClick
}) {
  const Wrapper = onClick ? 'button' : 'div';
  const isLongLabel = label && label.length > 20;
  const isLongDescription = description && description.length > 50;
  const hasLongText = isLongLabel || isLongDescription;
  const getCardClasses = () => {
    const classes = ["image-card"];
    if (onClick) classes.push("image-card-clickable");
    if (hasLongText) classes.push("image-card-long-text");
    return classes.join(" ");
  };
  return /*#__PURE__*/React.createElement(Wrapper, _extends({
    className: getCardClasses()
  }, onClick ? {
    onClick,
    type: "button",
    "aria-label": label
  } : {}), /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: label,
    className: "image-card-img"
  }), /*#__PURE__*/React.createElement("div", {
    className: "image-card-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: `image-card-label ${isLongLabel ? 'image-card-label-long' : ''}`
  }, label), /*#__PURE__*/React.createElement("div", {
    className: `image-card-description ${isLongDescription ? 'image-card-description-long' : ''}`
  }, description), iconImages.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "image-card-icons"
  }, iconImages.map((iconSrc, index) => /*#__PURE__*/React.createElement("img", {
    key: index,
    src: iconSrc,
    alt: `Icon ${index + 1}`,
    className: "image-card-icon"
  })))));
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs.exports = requireReactIs_production_min();
	} else {
	  reactIs.exports = requireReactIs_development();
	}
	return reactIs.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var propTypesExports = propTypes.exports;
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

const Input = ({
  placeholder,
  value,
  onChange,
  disabled = false,
  error = false,
  type = 'text',
  id,
  className = ''
}) => {
  const handleChange = e => {
    if (disabled) return;
    if (onChange) {
      onChange(e.target.value);
    }
  };
  const getWrapperClasses = () => {
    const classes = ['input-wrapper'];
    if (disabled) classes.push('disabled');
    if (error) classes.push('error');
    if (className) classes.push(className);
    return classes.join(' ');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: getWrapperClasses()
  }, /*#__PURE__*/React.createElement("input", {
    type: type,
    className: "input-field",
    placeholder: placeholder,
    value: value,
    onChange: handleChange,
    disabled: disabled,
    id: id
  }));
};
Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string
};

function LoadingBar({
  progress = 0,
  variant = 'blue',
  height = '4px',
  width = '100%',
  className = '',
  style = {}
}) {
  // Asigură-te că progress este între 0 și 100
  const clampedProgress = Math.max(0, Math.min(100, progress));
  return /*#__PURE__*/React.createElement("div", {
    className: `loading-bar-container ${className}`,
    style: {
      width,
      height,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `loading-bar-fill ${variant}`,
    style: {
      width: `${clampedProgress}%`,
      height: '100%'
    }
  }));
}

function MessageBox({
  type = "info",
  message = "",
  direction = "right",
  className = '',
  style
}) {
  const getTypeColor = type => {
    switch (type) {
      case 'success':
        return '#28a745';
      case 'warning':
        return '#ffc107';
      case 'error':
        return '#dc3545';
      case 'info':
      default:
        return '#3884d9';
    }
  };
  const calculateTextLayout = text => {
    if (typeof window === 'undefined') return {
      lines: [text],
      width: 0,
      height: 49
    };
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = 'bold 14px Arial';
    const maxWidth = 300;
    const lineHeight = 18;
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    let maxLineWidth = 0;
    for (let word of words) {
      const testLine = currentLine ? currentLine + ' ' + word : word;
      const metrics = context.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && currentLine !== '') {
        lines.push(currentLine);
        maxLineWidth = Math.max(maxLineWidth, context.measureText(currentLine).width);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
      maxLineWidth = Math.max(maxLineWidth, context.measureText(currentLine).width);
    }
    const textAreaHeight = lines.length * lineHeight;
    const topPadding = 30;
    const bottomPadding = 30;
    const totalHeight = Math.max(49, textAreaHeight + topPadding + bottomPadding);
    const finalWidth = Math.max(170, maxLineWidth + 60);
    return {
      lines,
      width: finalWidth,
      height: totalHeight
    };
  };
  const {
    lines,
    width: dynamicWidth,
    height: dynamicHeight
  } = calculateTextLayout(message);
  const typeColor = getTypeColor(type);
  const pointerWidth = 14;
  const pointerHeight = 12;
  const pointerBaseY = dynamicHeight - pointerHeight;
  let pointerLeft, pointerRight;
  if (direction === "left") {
    pointerLeft = 13;
    pointerRight = 13 + pointerWidth;
  } else {
    pointerLeft = dynamicWidth - pointerWidth - 13;
    pointerRight = dynamicWidth - 13;
  }
  let pointerPath;
  if (direction === "left") {
    pointerPath = `
      M${pointerRight} ${pointerBaseY}
      V${pointerBaseY + 4}
      H${pointerRight - 4}
      V${pointerBaseY + 8}
      H${pointerRight - 8}
      V${pointerBaseY + 12}
      H${pointerLeft}
      V${pointerBaseY}
      H${pointerRight}
      Z
    `;
  } else {
    pointerPath = `
      M${pointerLeft} ${pointerBaseY}
      V${pointerBaseY + 4}
      H${pointerLeft + 4}
      V${pointerBaseY + 8}
      H${pointerLeft + 8}
      V${pointerBaseY + 12}
      H${pointerRight}
      V${pointerBaseY}
      H${pointerLeft}
      Z
    `;
  }
  const dynamicSvg = `
    <svg
      width="${dynamicWidth}"
      height="${dynamicHeight}"
      viewBox="0 0 ${dynamicWidth} ${dynamicHeight}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      shape-rendering="crispEdges"
    >
      <path
        d="M9 3 H${dynamicWidth - 9} V6 H${dynamicWidth - 4} V${dynamicHeight - pointerHeight - 3} H${dynamicWidth - 9} V${dynamicHeight - pointerHeight} H9 V${dynamicHeight - pointerHeight - 3} H4 V6 H9 V3 Z"
        fill="${typeColor}"
      />
      <path
        d="${pointerPath}"
        fill="${typeColor}"
      />
      ${lines.map((line, index) => `
        <text
          x="20"
          y="${30 + index * 18}"
          text-anchor="start"
          fill="white"
          dominant-baseline="middle"
        >${line}</text>
      `).join('')}
    </svg>
  `;
  return /*#__PURE__*/React.createElement("div", {
    className: `message-box ${type} ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "message-background"
  }, /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: dynamicSvg
    },
    style: {
      display: 'block'
    }
  })));
}

function Scrollbar({
  children,
  height = '300px',
  width = '100%',
  className = '',
  showScrollbar = true,
  onScroll = null,
  variant = 'vertical',
  // 'vertical' or 'horizontal'
  grid = false,
  // Enable grid layout
  gridCols = 3,
  // Number of columns for grid
  gridGap = '16px' // Gap between grid items
}) {
  const [scrollTop, setScrollTop] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const [scrollHeight, setScrollHeight] = React.useState(0);
  const [scrollWidth, setScrollWidth] = React.useState(0);
  const [clientHeight, setClientHeight] = React.useState(0);
  const [clientWidth, setClientWidth] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragStartY, setDragStartY] = React.useState(0);
  const [dragStartX, setDragStartX] = React.useState(0);
  const [dragStartScrollTop, setDragStartScrollTop] = React.useState(0);
  const [dragStartScrollLeft, setDragStartScrollLeft] = React.useState(0);
  const containerRef = React.useRef(null);
  const scrollbarRef = React.useRef(null);
  const thumbRef = React.useRef(null);
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const updateScrollInfo = () => {
      setScrollTop(container.scrollTop);
      setScrollLeft(container.scrollLeft);
      setScrollHeight(container.scrollHeight);
      setScrollWidth(container.scrollWidth);
      setClientHeight(container.clientHeight);
      setClientWidth(container.clientWidth);
    };
    updateScrollInfo();
    container.addEventListener('scroll', updateScrollInfo);
    window.addEventListener('resize', updateScrollInfo);
    return () => {
      container.removeEventListener('scroll', updateScrollInfo);
      window.removeEventListener('resize', updateScrollInfo);
    };
  }, []);
  const handleScroll = e => {
    if (onScroll) {
      onScroll(e);
    }
  };
  const handleMouseDown = e => {
    e.preventDefault();
    setIsDragging(true);
    if (variant === 'vertical') {
      setDragStartY(e.clientY);
      setDragStartScrollTop(scrollTop);
    } else {
      setDragStartX(e.clientX);
      setDragStartScrollLeft(scrollLeft);
    }
    document.body.style.userSelect = 'none';
  };
  const handleMouseMove = e => {
    if (!isDragging) return;
    if (variant === 'vertical') {
      const deltaY = e.clientY - dragStartY;
      const scrollRatio = deltaY / (clientHeight - thumbHeight);
      const newScrollTop = dragStartScrollTop + scrollRatio * (scrollHeight - clientHeight);
      if (containerRef.current) {
        containerRef.current.scrollTop = Math.max(0, Math.min(newScrollTop, scrollHeight - clientHeight));
      }
    } else {
      const deltaX = e.clientX - dragStartX;
      const scrollRatio = deltaX / (clientWidth - thumbWidth);
      const newScrollLeft = dragStartScrollLeft + scrollRatio * (scrollWidth - clientWidth);
      if (containerRef.current) {
        containerRef.current.scrollLeft = Math.max(0, Math.min(newScrollLeft, scrollWidth - clientWidth));
      }
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = '';
  };
  const handleThumbClick = e => {
    e.stopPropagation();
  };
  const handleTrackClick = e => {
    const track = scrollbarRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    if (variant === 'vertical') {
      const clickY = e.clientY - rect.top;
      const trackHeight = rect.height;
      const scrollRatio = clickY / trackHeight;
      const newScrollTop = scrollRatio * (scrollHeight - clientHeight);
      if (containerRef.current) {
        containerRef.current.scrollTop = Math.max(0, Math.min(newScrollTop, scrollHeight - clientHeight));
      }
    } else {
      const clickX = e.clientX - rect.left;
      const trackWidth = rect.width;
      const scrollRatio = clickX / trackWidth;
      const newScrollLeft = scrollRatio * (scrollWidth - clientWidth);
      if (containerRef.current) {
        containerRef.current.scrollLeft = Math.max(0, Math.min(newScrollLeft, scrollWidth - clientWidth));
      }
    }
  };
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStartY, dragStartX, dragStartScrollTop, dragStartScrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth]);

  // Vertical scrollbar calculations
  const verticalScrollRatio = scrollHeight > clientHeight ? scrollTop / (scrollHeight - clientHeight) : 0;
  const thumbHeight = Math.max(40, Math.min(80, clientHeight * 0.3)); // Fixed size between 40-80px
  const thumbTop = verticalScrollRatio * (clientHeight - thumbHeight);

  // Horizontal scrollbar calculations
  const horizontalScrollRatio = scrollWidth > clientWidth ? scrollLeft / (scrollWidth - clientWidth) : 0;
  const thumbWidth = Math.max(40, Math.min(80, clientWidth * 0.3)); // Fixed size between 40-80px
  const thumbLeft = horizontalScrollRatio * (clientWidth - thumbWidth);
  const showVerticalScrollbar = variant === 'vertical' && showScrollbar && scrollHeight > clientHeight;
  const showHorizontalScrollbar = variant === 'horizontal' && showScrollbar && scrollWidth > clientWidth;
  const getGridStyle = () => {
    if (!grid || variant === 'horizontal') return {};
    return {
      display: 'flex',
      flexWrap: 'wrap',
      gap: gridGap,
      width: '100%'
    };
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `custom-scrollbar-container ${className} ${variant}`,
    style: {
      height,
      width
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    className: `custom-scrollbar-content ${variant}`,
    "data-grid-cols": grid ? gridCols : undefined,
    onScroll: handleScroll
  }, /*#__PURE__*/React.createElement("div", {
    style: getGridStyle()
  }, React.Children.map(children, (child, index) => {
    if (grid && variant === 'vertical' && /*#__PURE__*/React.isValidElement(child)) {
      return /*#__PURE__*/React.cloneElement(child, {
        ...child.props,
        className: `grid-item ${child.props.className || ''}`.trim()
      });
    }
    return child;
  }))), showVerticalScrollbar && /*#__PURE__*/React.createElement("div", {
    ref: scrollbarRef,
    className: "custom-scrollbar-track vertical",
    onClick: handleTrackClick
  }, /*#__PURE__*/React.createElement("div", {
    ref: thumbRef,
    className: "custom-scrollbar-thumb",
    style: {
      height: `${thumbHeight}px`,
      top: `${thumbTop}px`
    },
    onMouseDown: handleMouseDown,
    onClick: handleThumbClick
  })), showHorizontalScrollbar && /*#__PURE__*/React.createElement("div", {
    ref: scrollbarRef,
    className: "custom-scrollbar-track horizontal",
    onClick: handleTrackClick
  }, /*#__PURE__*/React.createElement("div", {
    ref: thumbRef,
    className: "custom-scrollbar-thumb",
    style: {
      width: `${thumbWidth}px`,
      left: `${thumbLeft}px`
    },
    onMouseDown: handleMouseDown,
    onClick: handleThumbClick
  })));
}

const Slider = ({
  value = 100,
  max = 100,
  label = "Set to the max",
  showPercentage = true,
  onChange,
  disabled = false
}) => {
  const [currentValue, setCurrentValue] = React.useState(value);
  const [isDragging, setIsDragging] = React.useState(false);
  const trackRef = React.useRef(null);
  const percentage = Math.min(currentValue / max * 100, 100);
  const updateValue = clientX => {
    if (!trackRef.current || disabled) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const trackWidth = rect.width;
    let newPercentage = clickX / trackWidth * 100;
    newPercentage = Math.max(0, Math.min(100, newPercentage));
    const newValue = Math.round(newPercentage / 100 * max);
    setCurrentValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  const handleMouseDown = e => {
    if (disabled) return;
    setIsDragging(true);
    updateValue(e.clientX);
  };
  const handleMouseMove = e => {
    if (isDragging && !disabled) {
      updateValue(e.clientX);
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);
  React.useEffect(() => {
    setCurrentValue(value);
  }, [value]);
  return /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    className: `progress-slider-track ${disabled ? 'disabled' : ''}`,
    onMouseDown: handleMouseDown
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-slider-fill",
    style: {
      width: `${percentage}%`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: `progress-slider-thumb ${isDragging ? 'dragging' : ''}`,
    style: {
      left: `calc(${percentage}% - 8px)`
    }
  }));
};

function Toggle({
  checked,
  onChange,
  disabled = false
}) {
  const [isOn, setIsOn] = React.useState(checked || false);
  const handleClick = () => {
    if (disabled) return;
    setIsOn(prev => {
      if (onChange) onChange(!prev);
      return !prev;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `toggle-box${isOn ? " on" : " off"}${disabled ? " disabled" : ""}`,
    onClick: handleClick,
    "aria-disabled": disabled
  }, /*#__PURE__*/React.createElement("div", {
    className: `toggle-slider${isOn ? " on" : " off"}${disabled ? " disabled" : ""}`,
    style: {
      left: isOn ? "32px" : "0px"
    }
  }));
}

exports.Button = Button;
exports.Checkbox = Checkbox;
exports.Container = Container;
exports.ContainerExample = ContainerExample;
exports.Dropdown = Dropdown;
exports.ImageCard = ImageCard;
exports.Input = Input;
exports.LoadingBar = LoadingBar;
exports.MessageBox = MessageBox;
exports.Scrollbar = Scrollbar;
exports.Slider = Slider;
exports.Toggle = Toggle;
exports.default = Button;
//# sourceMappingURL=index.js.map
