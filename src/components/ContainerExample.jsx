import React from 'react';
import Container from './Container';

function ContainerExample() {
  return (
    <div className="space-y-8">
      <h3 className="text-gray-300 mb-6 text-sm">Container Examples</h3>
      
      {/* Container Default */}
      <div>
        <label className="text-gray-300 text-xs block mb-2">Default Container</label>
        <Container>
          <p className="text-gray-300 text-sm">Acesta este containerul default cu stilul pixel art original.</p>
        </Container>
      </div>

      {/* Container Deschis */}
      <div>
        <label className="text-gray-300 text-xs block mb-2">Container Deschis (Open)</label>
        <Container variant="open">
          <p className="text-gray-300 text-sm">Container fără fundal, doar cu border. Perfect pentru conținut care trebuie să se integreze cu fundalul.</p>
        </Container>
      </div>

      {/* Container Transparent */}
      <div>
        <label className="text-gray-300 text-xs block mb-2">Container Transparent</label>
        <Container variant="transparent">
          <p className="text-gray-300 text-sm">Container negru cu fundal transparent și efect de blur. Ideal pentru overlay-uri și modal-uri.</p>
        </Container>
      </div>

      {/* Container Dark */}
      <div>
        <label className="text-gray-300 text-xs block mb-2">Container Dark</label>
        <Container variant="dark">
          <p className="text-gray-300 text-sm">Container foarte întunecat pentru conținut care necesită contrast maxim.</p>
        </Container>
      </div>

      {/* Container Glass */}
      <div>
        <label className="text-gray-300 text-xs block mb-2">Container Glass</label>
        <Container variant="glass">
          <p className="text-gray-300 text-sm">Container cu efect de sticlă și blur. Modern și elegant.</p>
        </Container>
      </div>

      {/* Container Outlined */}
      <div>
        <label className="text-gray-300 text-xs block mb-2">Container Outlined</label>
        <Container variant="outlined">
          <p className="text-gray-300 text-sm">Container cu border dashed. Perfect pentru zone de drop sau placeholder-uri.</p>
        </Container>
      </div>

      {/* Container Minimal */}
      <div>
        <label className="text-gray-300 text-xs block mb-2">Container Minimal</label>
        <Container variant="minimal">
          <p className="text-gray-300 text-sm">Container foarte simplu cu border subtil. Pentru conținut care nu necesită accent.</p>
        </Container>
      </div>

      {/* Container White Mode */}
      <div>
        <label className="text-gray-300 text-xs block mb-2">Container White Mode</label>
        <Container variant="white">
          <p className="text-gray-900 text-sm">Container cu fundal alb și linie gri la bază. Perfect pentru design-uri moderne și curate.</p>
        </Container>
      </div>

      {/* Container Card */}
      <div>
        <label className="text-gray-300 text-xs block mb-2">Container Card</label>
        <Container variant="card">
          <p className="text-gray-300 text-sm">Container cu stil de card, cu umbră și aspect mai proeminent.</p>
        </Container>
      </div>

      {/* Container Form */}
      <div>
        <label className="text-gray-300 text-xs block mb-2">Container Form</label>
        <Container variant="form">
          <p className="text-gray-300 text-sm">Container special pentru formulare, cu fundal mai întunecat.</p>
        </Container>
      </div>

      {/* Diferite dimensiuni */}
      <div className="space-y-4">
        <label className="text-gray-300 text-xs block">Diferite Dimensiuni</label>
        
        <div>
          <label className="text-gray-300 text-xs block mb-2">Small</label>
          <Container variant="open" size="small">
            <p className="text-gray-300 text-sm">Container mic</p>
          </Container>
        </div>
        
        <div>
          <label className="text-gray-300 text-xs block mb-2">Large</label>
          <Container variant="transparent" size="large">
            <p className="text-gray-300 text-sm">Container mare cu mai mult spațiu</p>
          </Container>
        </div>
        
        <div>
          <label className="text-gray-300 text-xs block mb-2">Compact</label>
          <Container variant="minimal" size="compact">
            <p className="text-gray-300 text-sm">Container compact</p>
          </Container>
        </div>
      </div>

      {/* Combinații */}
      <div className="space-y-4">
        <label className="text-gray-300 text-xs block">Combinații de Variante</label>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Container variant="glass" size="small">
            <p className="text-gray-300 text-sm">Glass + Small</p>
          </Container>
          
          <Container variant="outlined" size="large">
            <p className="text-gray-300 text-sm">Outlined + Large</p>
          </Container>
          
          <Container variant="dark" size="compact">
            <p className="text-gray-300 text-sm">Dark + Compact</p>
          </Container>
          
          <Container variant="open" size="default">
            <p className="text-gray-300 text-sm">Open + Default</p>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default ContainerExample; 