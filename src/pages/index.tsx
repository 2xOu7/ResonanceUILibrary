import React from 'react'

export default () => {
  return <div style={{ marginLeft: '1vw', marginRight: '1vw' }}>
    <h3 style={{ textAlign: 'center' }}>Welcome to the Resonance UI Library</h3>
    <p>Using the navigation bar, you can browse some pre-written
      components that we have built for you in a variety of
      popular UI framework libraries.</p>
    <h4>Disclaimer:</h4>
    <ol style={{ listStyleType: 'bulleted', marginLeft: '1vw' }}>
      <li>We recommend you style your components to fit your website. We use the generic themes for each library, as our
        main goal is just to give you an idea of what an effective layout and appearance could be for a format.
      </li>
      <li>We are always open to providing code snippets for other libraries. Simply open an issue at this <a
        href={'https://github.com/2xOu7/ResonanceUILibrary'}>GitHub Repo</a> and list what framework you
        would like to see.
      </li>
      <li>Navigate between different frameworks using the navigation bar at the top.</li>
    </ol>
  </div>
}
