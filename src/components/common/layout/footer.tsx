import SimpleBlockContent from "@/components/common/block/simple-block-content";
import { urlForImage } from "@/lib/sanity/sanity.image";


export default function Footer({logo, footerText, footerNavigation, footerNavigationTitle}) {
  console.log(logo)
  return (
    <div className="bg-dark-blue text-white">
      <div className="container mx-auto pt-14 pb-4">
        <div className="footer-up flex flex-row justify-between pb-16">
          <div className="footer-logo">
            <img src={logo.asset && logo.asset.url} alt={'???'} width="130"/>
          </div>
          <div className="footer-nav">
            <h6 className="text-lg">{footerNavigationTitle && <SimpleBlockContent blocks={footerNavigationTitle} />}</h6>
            <div className="flex flex-col mt-6">
              {footerNavigation.map(item => {
                return <a className="opacity-60"
                  href={"/"+item.slug.current}>
                    {item.title}
                </a>;
              })}
            </div>
          </div>
        </div>
        <div className="fotter-bottom border-t-2 border-footer-divider pt-4 opacity-60">
          {footerText && <SimpleBlockContent blocks={footerText} />}
        </div>
      </div>
    </div>
  )
}
