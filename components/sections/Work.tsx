import clsx from "clsx";

import style from "./work.module.scss";

const Work = () => {
  return (
    <section className={style.work}>
      <div className={style.maxWidth}>
        <h1>My Experience</h1>
        <div className={style.wrapper}>
          <input type="radio" id="tab1" name="tab" defaultChecked />
          <input type="radio" id="tab2" name="tab" />
          <div className={style.indicator} />
          <div className={style.tabsContainer}>
            <label htmlFor="tab1">Hotel Engine</label>
            <label htmlFor="tab2">Reynolds and Reynolds</label>
          </div>
          <div className={style.contentContainer}>
            <div className={style.content}>
              <div className={style.role}>
                <h3>Software Engineer, React</h3>
                <span className={style.at}>&nbsp;@&nbsp;</span>
                <a
                  className={style.jobLink}
                  href="https://www.hotelengine.com/"
                  target="_blank"
                >
                  Hotel Engine
                </a>
              </div>
              <p className={style.range}>July 2021 to November 2022</p>
              <ul>
                <li>
                  Built a full-stack analytics dashboard to help customers
                  monitor specific KPIs and generate actionable insights into
                  their performance.
                </li>
                <li>
                  Created custom data visualizations from market, year-over-year
                  datasets.
                </li>
                <li>Delivered MVP to shareholders in under three months.</li>
              </ul>
            </div>
            <div className={style.content}>
              <div className={style.role}>
                <h3>Software Developer</h3>
                <span className={style.at}>&nbsp;@&nbsp;</span>
                <a
                  className={style.jobLink}
                  href="https://www.reyrey.com/"
                  target="_blank"
                >
                  Reynolds and Reynolds
                </a>
              </div>
              <p className={style.range}>January 2019 to July 2021</p>
              <ul>
                <li>
                  Built a web portal for customers to view invoices and other
                  important documents.
                </li>
                <li>
                  Integrated modern web frameworks with a legacy COBOL codebase.
                </li>
                <li>
                  Awarded the Meritorious Performance Award within the first
                  year of employment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
