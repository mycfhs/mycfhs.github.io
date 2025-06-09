---
title: "DreamMix: Decoupling Object Attributes for Enhanced Editability in Customized Image Inpainting"
collection: publications
category: manuscripts
permalink: /publication/2009-10-01-paper-title-number-1
excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
date: 2009-10-01
venue: 'Journal 1'
slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'http://academicpages.github.io/files/paper1.pdf'
bibtexurl: 'http://academicpages.github.io/files/bibtex1.bib'
citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---
Subject-driven image inpainting has emerged as a popular task in image editing alongside recent advancements in diffusion models. Previous methods primarily focus on identity preservation but struggle to maintain the editability of inserted objects. In response, this paper introduces DreamMix, a diffusion-based generative model adept at inserting target objects into given scenes at user-specified locations while concurrently enabling arbitrary text-driven modifications to their attributes. In particular, we leverage advanced foundational inpainting models and introduce a disentangled local-global inpainting framework to balance precise local object insertion with effective global visual coherence. Additionally, we propose an Attribute Decoupling Mechanism (ADM) and a Textual Attribute Substitution (TAS) module to improve the diversity and discriminative capability of the text-based attribute guidance, respectively. Extensive experiments demonstrate that DreamMix effectively balances identity preservation and attribute editability across various application scenarios, including object insertion, attribute editing, and small object inpainting. Our code is publicly available at https://github.com/mycfhs/DreamMix.