document.write("Hello world."); // lgtm [js/eval-like-call]

document.getElementById("foo").innerHTML = window.location.search;

var dictionary = {
	"a": "foo",
	"a": "bar"
};
