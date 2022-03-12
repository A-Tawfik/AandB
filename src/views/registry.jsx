import { useLayoutEffect } from 'react'
function Registry() {
  useLayoutEffect(() => {
    zolaScript(document, "script", "zola-wjs")
  }, [])
  return (
    <section className="registry">
      <script></script>
      <a className="zola-registry-embed" href="https://www.zola.com/registry/amirandbibi" data-registry-key="amirandbibi">Our Zola Wedding Registry</a>
    </section>
  );
}

export default Registry;

function zolaScript(documentObj, scriptName, zolaWjs) {
  var newElement, targetElement = documentObj.getElementsByTagName(scriptName)[0];
  newElement = documentObj.createElement(scriptName)
  newElement.id = zolaWjs
  newElement.async = !0
  newElement.src = "https://widget.zola.com/js/widget.js"
  targetElement.parentNode.insertBefore(newElement, targetElement)
};