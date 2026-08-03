// Direct-answer block (GEO / featured-snippet optimization).
// Renders an exact question as an <h2> followed by a concise, factual answer
// with concrete data (price, time, material) high on the page so AI Overviews,
// ChatGPT and Google featured snippets can lift it verbatim.
// Placed right after the hero on each key service / landing page.
interface RespuestaDirectaProps {
  pregunta: string;
  respuesta: string;
}

export default function RespuestaDirecta({ pregunta, respuesta }: RespuestaDirectaProps) {
  return (
    <section className="px-4" style={{ backgroundColor: '#FCFBF9' }}>
      <div className="max-w-4xl mx-auto pb-10">
        <div
          className="rounded-lg border p-6 md:p-7"
          style={{ backgroundColor: '#FFFFFF', borderColor: '#E8E3DA', borderLeftColor: '#C9A461', borderLeftWidth: 3 }}
        >
          <h2
            className="text-base md:text-lg font-semibold mb-3"
            style={{ color: '#211E18', fontFamily: 'var(--font-playfair-display, serif)' }}
          >
            {pregunta}
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#5A5449' }}>
            {respuesta}
          </p>
        </div>
      </div>
    </section>
  );
}
