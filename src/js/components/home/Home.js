import React, { Component } from "react";
import ReactDOM from "react-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: "Silvano"
    };
  }
  render() {
    const { seo_title } = this.state;
    return (
        <article className="content">
            <section className="grid-0">
                Hello {seo_title} - Página Home!
            </section>
            <section className="grid-1">
            <div className="grid">
                <img src="https://i0.wp.com/bold-wordpress.aspirethemes.com/wp-content/uploads/2015/12/zachary-nelson-192289.jpeg" />
            </div>
            <div className="grid">
                <img src="https://i1.wp.com/bold-wordpress.aspirethemes.com/wp-content/uploads/2015/12/clem-onojeghuo-110525-1.jpeg" />
            </div>
            <div className="grid">
                <img src="https://i1.wp.com/bold-wordpress.aspirethemes.com/wp-content/uploads/2015/12/rob-bye-66755-1.jpeg" />
            </div>
            </section>
        </article>
    );
  }
}
export default Home;