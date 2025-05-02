import React from 'react';

function SearchResults({ results }) {
    if (!results) return null;

    return (
        <div style={{ padding: '20px' }}>
            {/* Herbs Table */}
            <h2>Herbs</h2>
            {results.herbs && results.herbs.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Latin Name</th>
                            <th>Common Name</th>
                            <th>Kanji</th>
                            <th>Katakana</th>
                            <th>Pinyin</th>
                            <th>Tradiational Chinese</th>
                            <th>Simplified Chinese</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.herbs.map((herb) => (
                            <tr key={herb._id}>
                                <td>{herb.LatinName || '—'}</td>
                                <td>{herb.CommonName || '—'}</td>
                                <td>{herb.Kanji || '—'}</td>
                                <td>{herb.Katakana || '—'}</td>
                                <td>{herb.Pinyin || '—'}</td>
                                <td>{herb.TraditionalChinese || '—'}</td>
                                <td>{herb.SimplifiedChinese || '—'}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No herbs found for this search.</p>
            )}

            {/* Toxins Table */}
            <h2>Toxins</h2>
            {results.toxins && results.toxins.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Latin Name</th>
                            <th>Common Name</th>
                            <th>Distribution</th>
                            <th>Location</th>
                            <th>Toxic Part</th>
                            <th>Phytotoxin</th>
                            <th>Relative Toxicity</th>
                            <th>Predicted LD50</th>
                            <th>Human Toxicity</th>
                            <th>Animal Toxicity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.toxins.map((toxin) => (
                            <tr key={toxin._id}>
                                <td>{toxin.LatinName || '—'}</td>
                                <td>{toxin.CommonName || '—'}</td>
                                <td>{toxin.Distribution || '—'}</td>
                                <td>{toxin.Location || '—'}</td>
                                <td>{toxin.ToxicPart || '—'}</td>
                                <td>{toxin.Phytotoxin || '—'}</td>
                                <td>{toxin.RelativeToxicity || '—'}</td>
                                <td>{toxin.PredictedLD50 || '—'}</td>
                                <td>{toxin.HumanToxicity || '—'}</td>
                                <td>{toxin.AnimalToxicity || '—'}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No toxins found for this search.</p>
            )}
        </div>
    );
}

export default SearchResults;
