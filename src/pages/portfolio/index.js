import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import config from "../../../data/site-config";
import MainWrapper from "../../layouts/MainWrapper/MainWrapper";
import PageHero from "../../components/PageHero";
import PortfolioCard from "../../components/PortfolioCard";
import ClientList from "../../components/ClientList";

const PortfolioPage = ({ data, transition }) => {
  const portfolio = data.portfolio.edges.map(e => e.node);
  const page = data.page.frontmatter

  let cardGroups = [];
  let lastClient;
  for (var client of page.clients) {
    const clientInfo = portfolio.find((c) => c.frontmatter.name == client.name);
    if (!clientInfo) { 
      console.log('cannot find client', client.name, 'in portfolio folder')
      continue
    }

    client = Object.assign(client, clientInfo.frontmatter)

    if (client.width != "full") {
      if (lastClient && lastClient.width != "full") {
        cardGroups[cardGroups.length - 1].push(client);
      } else {
        cardGroups.push([client]);
      }
    } else {
      cardGroups.push([client]);
    }

    lastClient = client;
  }

  return (
    <div className="">
      <Helmet>
        <title>{`Portfolio | ${config.siteTitle}`}</title>
        <body class="light-theme" />
      </Helmet>

      <section
        id="PageHero"
        className="page-hero bg-near-black white"
        style={transition && transition.style}
      >
        <div className="page-hero__content row">
          <h1 className="page-hero__headline white">
            Good looking work isn’t good enough
          </h1>
          <p className="page-hero__text white">
            Good work delivers great results beyond the imagination. Unlike our
            competitors who push a one-size-fits-all solution, we opt for
            specialized project plans to ensure you accomplish your
            business&nbsp;goals.
          </p>
        </div>
      </section>

      <MainWrapper>
        <section className="">
          {cardGroups.map(group => {
            if (group.length == 1 && group[0].width == "full") {
              if (group[0].border) {
                return <div className={`b--${group[0].border}`}>
                    <PortfolioCard {...group[0]} />;
                  </div>
              }
              return <PortfolioCard {...group[0]} />;
            }

            const border = group.find((c) => c.border).border
            return (
              <div className={`flex-ns bt-ns bb-ns bw3-ns ${border && `b--${border}`}`}>
                {group.map(client => (
                  <PortfolioCard
                    {...client}
                    uniqueClass={`br-ns ${client.width ||
                      "bw3"} ${border && `b--${border}`}`}
                  />
                ))}
              </div>
            );
          
          })}
        </section>

        <section className="pv5 cf bg-deep-purple white">
          <div className="row">
            <div className="fr-l w-40-l mb5">
              <h2 className="f2 sans-serif dark-red mt0 mt3-ns">
                Can we work with you?
              </h2>
              <p className="white-80 measure-narrow">
                We’ve worked with some really cool clients and solved big and
                small problems. We continually improve how we work to ensure we
                are top-notch and ready for any challenge.
              </p>
              <p className="white-80 sans-serif measure-narrow">
                What can we work on together?
              </p>
              <Link
                to="/contact/"
                className="f6 fw5 link br1 ph3 pv3 mt4 dib white bg-dark-red dim"
              >
                Let's talk about your project →
              </Link>
            </div>
            <div className="fl-l w-50-l bt bw1 b--white-10 pt4 pa0-l bw0-l">
              <ClientList />
            </div>
          </div>
        </section>
      </MainWrapper>
    </div>
  );
};

export default PortfolioPage;

export const portfolioQuery = graphql`
  query PortfolioPageQuery {
    portfolio: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "portfolio" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 1000)
          frontmatter {
            name
            title
            description
            urlLink
            bgColor
            textColor
            logoPath
            bgPath
            bgYAxis
          }
        }
      }
    }

    page: markdownRemark(
      frontmatter: { type: { eq: "page" }, slug:{eq:"portfolio"} }
    ) {
      frontmatter {
        slug
        clients {
          name
          width
          border
        }
      }
    }
  }
`;
