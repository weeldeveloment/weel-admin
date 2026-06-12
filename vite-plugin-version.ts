import { type PluginOption } from "vite";

const INLINE_SCRIPT = `(function(){
  var v=document.querySelector('meta[name="build-version"]')&&document.querySelector('meta[name="build-version"]').getAttribute('content');
  if(v){try{var s=localStorage.getItem('__app_v');if(s&&s!==v){localStorage.setItem('__app_v',v);sessionStorage.setItem('__app_stale','1');var t=Date.now();location.href=location.pathname+'?v='+v+'&t='+t}else if(!s){localStorage.setItem('__app_v',v)}}catch(e){}}
  window.addEventListener('pageshow',function(e){if(e.persisted){location.href=location.pathname+'?r='+Date.now()}});
})();`;

export default function versionPlugin(version?: string): PluginOption {
  const ver = version || process.env.DEPLOY_VERSION || "dev";
  return {
    name: "vite-plugin-version",
    transformIndexHtml: {
      order: "post",
      handler(html: string) {
        return html.replace(
          "</head>",
          `  <meta name="build-version" content="${ver}">\n  <script>${INLINE_SCRIPT}</script>\n</head>`,
        );
      },
    },
  };
}
