import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Risk Platform',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <a href='/pages/Org-Wellmed/CCE-Apps-Docs/docs/handbooks/onboarding-handbook'>EPRS Provider Portal</a><br />
        <a href='/pages/Org-Wellmed/CCE-Apps-Docs/docs/handbooks/cloud-subscription-handbook'></a>
      </>
    ),
  },
  {
    title: 'Clinical Care Enablement',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <ul>
        <li><a>Optum 2</a></li>
        <li><a href='../../docs/tutorial-basics/create-a-page'>Care Delivery Support System</a></li>
	      <li><a href='/pages/Org-Wellmed/CCE-Apps-Docs/docs/best-practices/micro-service-best-practices'></a></li>
        <li><a href='/pages/Org-Wellmed/CCE-Apps-Docs/docs/best-practices/monitoring-dashboard-and-alert-setup'></a></li>
        </ul>
      </>
    ),
  },
  {
    title: 'Delegated Platform',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <a> Optum 3</a>
      </>
    ),
  },
  {
    title: 'Infrastructure Operations',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <a href='/pages/Org-Wellmed/CCE-Apps-Docs/docs/handbooks/onboarding-handbook'>EPRS Provider Portal</a><br />
        <a href='/pages/Org-Wellmed/CCE-Apps-Docs/docs/handbooks/cloud-subscription-handbook'></a>
      </>
    ),
  },
  {
    title: (<p>Admin/Arch./Info.<br/>/sec./Audit/ITSM</p>),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <a href='/pages/Org-Wellmed/CCE-Apps-Docs/docs/handbooks/onboarding-handbook'>EPRS Provider Portal</a><br />
        <a href='/pages/Org-Wellmed/CCE-Apps-Docs/docs/handbooks/cloud-subscription-handbook'></a>
      </>
    ),
  },
  {
    title: 'Data Services',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <a href='/pages/Org-Wellmed/CCE-Apps-Docs/docs/handbooks/onboarding-handbook'>EPRS Provider Portal</a><br />
        <a href='/pages/Org-Wellmed/CCE-Apps-Docs/docs/handbooks/cloud-subscription-handbook'></a>
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--2')}>

      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}

      <div className="text--center" >
        <h3 style={{textAlign: 'left'}}>{title}</h3>
        <p style={{textAlign: 'left'}}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
