import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm border-0">
              <div className="card-body p-5">
                <h1 className="card-title text-center mb-4" style={{ color: '#18ade4', fontWeight: 700 }}>
                  About Educationify
                </h1>
                <p className="card-text text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  <strong>Educationify</strong> is a modern news aggregation platform that brings you the latest
                  top headlines from around the world — all in one place.
                </p>
                <p className="card-text text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  Browse news across categories including General, Business, Entertainment, Health,
                  Science, Sports, and Technology. Stay informed with real-time updates powered by
                  the <strong>NewsAPI</strong>.
                </p>
                <hr />
                <h5 style={{ color: '#18ade4' }}>Features</h5>
                <ul className="text-muted" style={{ fontSize: '1rem', lineHeight: '2' }}>
                  <li>📰 Top headlines from trusted sources</li>
                  <li>🗂️ Filter by category</li>
                  <li>📄 Pagination support</li>
                  <li>🌐 Powered by NewsAPI</li>
                </ul>
                <hr />
                <p className="text-center text-muted mt-3" style={{ fontSize: '0.9rem' }}>
                  Built with ❤️ using React &amp; React Router
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
