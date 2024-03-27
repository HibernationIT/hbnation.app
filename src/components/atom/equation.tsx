import { Equation as Type } from "@/type/notion";

import { mathjax } from "mathjax-full/js/mathjax.js";
import { TeX } from "mathjax-full/js/input/tex.js";
import { CHTML } from "mathjax-full/js/output/chtml.js";
import { liteAdaptor } from "mathjax-full/js/adaptors/liteAdaptor.js";
import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html.js";

import { AllPackages } from "mathjax-full/js/input/tex/AllPackages.js";

export default function Equation({ value }: { value: Type }) {
  const adaptor = liteAdaptor();
  RegisterHTMLHandler(adaptor);

  const tex = new TeX({ packages: AllPackages });
  const chtml = new CHTML({
    fontURL:
      "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2",
  });
  const html = mathjax.document("$$" + value.equation.expression + "$$", {
    InputJax: tex,
    OutputJax: chtml,
  });
  html.render();

  return (
    <div className="n2c_equation">
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: adaptor.outerHTML(adaptor.root(html.document)),
          }}
        />
      </div>
    </div>
  );
}
