import React from "react";
import UtilityNav from "../2_molecules/navigation/utilityNav";
import PrimaryNav from "../2_molecules/navigation/primaryNav";
import PrimaryMobile from "../2_molecules/navigation/primaryMobile";
import UtilityMobile from "../2_molecules/navigation/utilityMobile";

import WhyMenus from "../2_molecules/navigation/whyMenus";
import SolutionsMenus from "../2_molecules/navigation/solutionsMenus";
import ProductsMenus from "../2_molecules/navigation/productsMenus";
import PricingMenus from "../2_molecules/navigation/pricingMenus";
import CommunityMenus from "../2_molecules/navigation/communityMenus";

class Header extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "/assets/header.js";
    script.async = true;
    document.querySelector('.c-site-header').parentNode.appendChild(script);
  }
  render() {
    return (
      <header itemScope="itemscope" itemType="http://schema.org/WPHeader">
        <div className="c-site-header">
          <div className="o-layout__row c-site-header__topbar">
            <div className="o-layout__colset">
              <div className="o-layout__col">
                <div className="o-layout__module c-notification">
                  <a href="#" className="c-notification__link" target="_self">
                    <span className="c-notification__tag"></span>
                    <span className="c-notification__message"></span>
                  </a>
                </div>
              </div>
              <div className="o-layout__col">
                <UtilityNav />
              </div>
            </div>
          </div>
          <div className="o-layout__row c-site-header__primary">
            <div className="o-layout__colset">
              <div className="o-layout__col">
                <div className="o-layout__module c-identity">
                  <a href="https://www.linode.com" className="c-identity__link" itemProp="url" target="_self">
                    <img width="160" height="55" alt="Linode - Akamai Cloud Computing Logo" className="c-identity__image" src="https://www.linode.com/wp-content/themes/linode-website-theme/images/linode-akamai-logo.svg?ver=1661285658" itemprop="image" data-no-lazy="1"></img>
                  </a>
                </div>
              </div>
              <PrimaryNav />
            </div>
          </div>
          <WhyMenus />
          <ProductsMenus />
          <SolutionsMenus />
          <PricingMenus />
          <CommunityMenus />
          <div className="o-layout__row c-sub-menu c-sub-menu--mobile" id="sub-menu--mobile">
            <div className="o-layout__colset">
              <div className="o-layout__col">
                <div className="o-layout__module">
                  <PrimaryMobile />
                </div>
                <div className="o-layout__module">
                  <UtilityMobile />
                </div>
                <div className="o-layout__module">
                  <ul className="o-menu__list">
                    <li className="o-menu__item o-menu__item--sign-up"><a className="o-menu__link" href="https://login.linode.com/signup"><span className="o-menu__title">Sign Up</span></a></li>
                  </ul>
                </div>
                <div className="o-layout__module">
                  <form
                    role="search"
                    method="get"
                    className="c-search"
                    action="https://www.linode.com"
                  >
                    <label htmlFor="s">
                      Search
                    </label>
                    <input
                        type="search"
                        placeholder="Search Linode"
                        defaultValue=""
                        name="s"
                    ></input>
                    <input
                      type="submit"
                      value="Search"
                    ></input>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default props => (
  <Header />
);
