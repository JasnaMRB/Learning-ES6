function ajax({
  type = "get",
  // here
  url = requiredParameter("url"),
  data = {},
  // and here
  success = requiredParameter("success"),
  error = () => {},
  isAsync = true } = {}) {
	console.log(JSON.stringify({ type, url, data, success, error, isAsync }, null, 2));
}

function requiredParameter(name) {
	throw new Error(`Missing parameter "${name}"`);
}

try {
	ajax({
		url: "https://my.api.io",
		success: () => {}
	});
} catch (e) { console.warn(e.message); } // (works as ecpected)

try {
	ajax({
		url: "https://my.api.io",
	});
} catch (e) { console.warn(e.message); } // Missing parameter "success"

try {
	ajax({
		success: () => {}  
	});
} catch (e) { console.warn(e.message); } // Missing parameter "success"