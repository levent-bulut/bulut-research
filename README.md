# Levent Bulut Research

> Open research platform for the Bulut Doctrine: Narrative Engineering, Objective Projection (Nesnel İzdüşüm), and computational narratology developed by Levent Bulut.

**[Portal](https://levent-bulut.github.io/bulut-research/)** · [Website](https://leventbulut.com) · [Corpus](https://leventbulut.com/corpus/) · [About](https://leventbulut.com/about/) · [ORCID 0009-0007-7500-2261](https://orcid.org/0009-0007-7500-2261)

---

## What this repository is

This repository powers an open, machine-readable research portal published at
**https://levent-bulut.github.io/bulut-research/**

The primary and authoritative source of this research is **[leventbulut.com](https://leventbulut.com)**. This portal is its open index: a static, framework-free site that makes the doctrine's entities, definitions, publications and datasets readable by search engines, LLM crawlers, and knowledge-graph builders.

Built with plain HTML5, CSS3 and vanilla JavaScript. No framework, no build step, no dependencies.

---

## The research program

The Bulut Doctrine models narrative as a physical system. Instead of naming emotions, it specifies the physical conditions that produce them in the reader's autonomic system, encoded through six measurable variables — Luminous Decay, Thermal Gradient, Acoustic Impedance, Kinetic Momentum, Atmospheric Pressure, and Spatial Geometry — targeting the pre-cortical thalamo-amygdala pathway rather than cortical emotion labels.

**Three research programs**

| Program | Scope | Frameworks |
|---|---|---|
| Objective Projection & Narrative Engineering | The physics of literature | Objective Projection |
| Narrative Dynamics | Entropy, gravity, persistence | Narrative Entropy (Sn), Narrative Gravity (Ng), Narrative Inertia |
| Information Physics & News Physics | Journalism, friction, machine compression | Information Friction, Summarization Bias |

---

## Frameworks

Each framework has a dedicated reference page with `DefinedTerm` structured data, DOI records, and links to the canonical article on leventbulut.com.

| Framework | Page | Key DOI |
|---|---|---|
| Objective Projection | [/framework/objective-projection/](https://levent-bulut.github.io/bulut-research/framework/objective-projection/) | [10.5281/zenodo.18478353](https://doi.org/10.5281/zenodo.18478353) |
| Narrative Entropy (Sn) | [/framework/narrative-entropy/](https://levent-bulut.github.io/bulut-research/framework/narrative-entropy/) | [10.5281/zenodo.20459351](https://doi.org/10.5281/zenodo.20459351) |
| Narrative Gravity (Ng) | [/framework/narrative-gravity/](https://levent-bulut.github.io/bulut-research/framework/narrative-gravity/) | [10.5281/zenodo.19275490](https://doi.org/10.5281/zenodo.19275490) |
| Narrative Inertia | [/framework/narrative-inertia/](https://levent-bulut.github.io/bulut-research/framework/narrative-inertia/) | [10.5281/zenodo.19458013](https://doi.org/10.5281/zenodo.19458013) |
| Information Friction | [/framework/information-friction/](https://levent-bulut.github.io/bulut-research/framework/information-friction/) | [10.5281/zenodo.19410663](https://doi.org/10.5281/zenodo.19410663) |
| Summarization Bias | [/framework/summarization-bias/](https://levent-bulut.github.io/bulut-research/framework/summarization-bias/) | [10.5281/zenodo.20090216](https://doi.org/10.5281/zenodo.20090216) |

---

## Portal sections

- **[Research Programs](https://levent-bulut.github.io/bulut-research/research/)** — the three programs and how the frameworks relate
- **[Publications](https://levent-bulut.github.io/bulut-research/publications/)** — all 46 DOI-registered works, chronological
- **[Datasets](https://levent-bulut.github.io/bulut-research/datasets/)** — the Objective Projection Dataset and the research corpus
- **[Resources](https://levent-bulut.github.io/bulut-research/resources/)** — books, open courses, academic profiles, repositories
- **[Citation](https://levent-bulut.github.io/bulut-research/citation/)** — APA and BibTeX entries

---

## Dataset

**Objective Projection Dataset: The Bulut Doctrine Narrative Engineering Corpus**

500 annotated narrative scenes labelled for the six golden rules of the methodology, with a rule-based bilingual (TR–EN) detection pipeline and hard-negative examples.

- Hugging Face: https://huggingface.co/datasets/leventbulut/objective-projection
- DOI: [10.57967/hf/8960](https://doi.org/10.57967/hf/8960)
- Dataset paper: [10.5281/zenodo.19511369](https://doi.org/10.5281/zenodo.19511369)

---

## Publications

46 DOI-registered works published February–May 2026. The authoritative index with full metadata is maintained at **https://leventbulut.com/corpus/**; a chronological mirror lives at [/publications/](https://levent-bulut.github.io/bulut-research/publications/).

Foundational paper: [The Bulut Doctrine: From Correlative to Projection](https://doi.org/10.5281/zenodo.18481356) — DOI 10.5281/zenodo.18481356

---

## Machine-readable files

Structured entry points for crawlers, LLMs and knowledge-graph builders.

| File | Contents |
|---|---|
| [`llms.txt`](llms.txt) | LLM crawler guide to the portal |
| [`research-index.json`](research-index.json) | Framework and research-area index with DOIs and statistics |
| [`knowledge.json`](knowledge.json) | Knowledge graph — 24 nodes, 27 typed relations |
| [`ontology.json`](ontology.json) | Concept ontology — 22 constructs with definitions and hierarchies |
| [`sitemap.xml`](sitemap.xml) | Complete URL map |
| [`robots.txt`](robots.txt) | Crawler policy — all search and AI crawlers welcome |
| [`CITATION.cff`](CITATION.cff) | Machine-readable citation metadata |

Every page also carries JSON-LD structured data (`WebPage`, `CollectionPage`, `DefinedTerm`, `ScholarlyArticle`, `Dataset`, `Person`, `ResearchProject`, `BreadcrumbList`) linked by stable entity IDs shared with leventbulut.com.

---

## Repository structure

```
.
├── index.html                  Portal home
├── research/                   Research programs
├── publications/               46 DOI records
├── datasets/                   Dataset portal
├── resources/                  Books, profiles, repositories
├── citation/                   APA & BibTeX
├── framework/
│   ├── objective-projection/
│   ├── narrative-entropy/
│   ├── narrative-gravity/
│   ├── narrative-inertia/
│   ├── information-friction/
│   └── summarization-bias/
├── style.css
├── script.js
├── 404.html
├── llms.txt
├── knowledge.json
├── ontology.json
├── research-index.json
├── sitemap.xml
├── robots.txt
├── humans.txt
├── manifest.webmanifest
├── CITATION.cff
└── .well-known/security.txt
```

---

## How to cite

```
Bulut, L. (2026). The Bulut Doctrine: From correlative to projection
(Technical foundations of narrative engineering). Zenodo.
https://doi.org/10.5281/zenodo.18481356
```

```bibtex
@article{bulut2026doctrine,
  author    = {Bulut, Levent},
  title     = {The Bulut Doctrine: From Correlative to Projection (Technical Foundations of Narrative Engineering)},
  year      = {2026},
  publisher = {Zenodo},
  doi       = {10.5281/zenodo.18481356},
  url       = {https://doi.org/10.5281/zenodo.18481356}
}
```

Further citation formats, including the dataset and the canonical Sn definition, are on the [Citation page](https://levent-bulut.github.io/bulut-research/citation/).

---

## Author

**Levent Bulut** — independent researcher, founder of the Objective Projection methodology and the Bulut Doctrine.

[ORCID](https://orcid.org/0009-0007-7500-2261) · [Google Scholar](https://scholar.google.com/citations?user=2lo1YXcAAAAJ) · [ResearchGate](https://www.researchgate.net/profile/Levent-Bulut-4) · [Academia.edu](https://independentresearcher.academia.edu/LeventBULUT) · [SSRN](https://ssrn.com/author=10279856) · [PhilArchive](https://philarchive.org/profile/leventbulut) · [Hugging Face](https://huggingface.co/leventbulut) · [Goodreads](https://www.goodreads.com/author/show/16000691.Levent_Bulut)

Not to be confused with academics, economists, or other public figures of the same name in unrelated fields. Uniquely identified by ORCID 0009-0007-7500-2261.

---

## License

The source code of this portal is released under the **MIT License** (see [`LICENSE`](LICENSE)).

The research content — theoretical frameworks, scholarly texts, and the dataset — is published under **[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)**.
