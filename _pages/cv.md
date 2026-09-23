---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

Education
======
* **M.S. in Information and Communication Engineering**, Dalian University of Technology, 2024.09—2027.07
  * Research focus: end-to-end autonomous driving, world models, computer vision, diffusion models, and multimodal AI
* **B.S. in Artificial Intelligence**, Dalian University of Technology, 2020.09—2024.07
  * Major courses: Computer Vision, Deep Learning, Linear Algebra, and Image Processing
  * Recommended for postgraduate study to the Lu Huchuan research group

Experience
======
* **2026.06—2026.09: Algorithm Intern, Bosch (China) Investment Co., Ltd. — Intelligent Driving & Control (XC)**
  * Worked on algorithm design, optimization, evaluation, and real-vehicle deployment for one-stage end-to-end world models.
  * Built an internal world-model foundation on **FastWAM** and designed **DeltaWorld** for dynamic-environment understanding, reducing trajectory prediction error by **30%**.
  * Developed **PV-Register** to improve traffic-light representation and interaction; increased interaction success from **20% to 90%**.
  * Led temporal-modeling iterations that reduced real-vehicle trajectory-jitter cases by **90%** and improved acceleration/braking comfort.
  * Designed a single-step trajectory-generation inference strategy, reducing latency from **85 ms to 20 ms**; contributed to automated evaluation and on-vehicle debugging.

* **2025.09—2026.05: Model Intern, Qingzhou Zhihang Technology Co., Ltd. — Parking Model Team**
  * Took primary ownership of building a VAD end-to-end scoring model from scratch, including Encoder—Decoder architecture, task-specific encoders for detection/OCC/navigation, and data augmentation.
  * Applied **Focal Loss + OHEM**, **R-Drop**, and self-supervised learning to address long-tail and overfitting issues; rare/complex-scene trajectory pass rate improved from **30% to 85%**.
  * Designed a trajectory difficulty vocabulary and reusable evaluation metrics for team-wide iteration.
  * Designed collision losses and a classification **RL** strategy, reducing scenario collision rate from **2% to 0.3%**; introduced **Recurrent** temporal modeling, reducing trajectory-consistency P95 from **16 m to 3 m**.
  * Processed data at the scale of **tens of millions of frames** and completed exploratory studies of **Diffusion Planner** and **MotionLM**.

Research & Projects
======
* **DreamMix: Decoupling Object Attributes for Enhanced Editability in Customized Image Inpainting** — *IJCV (CCF-A), First Author*
  * Proposed an attribute-decoupling mechanism, textual attribute substitution module, and local-global disentangled inpainting framework to improve identity preservation and attribute editability.
  * Achieved CLIP-T **0.289** on SDXL and **0.290** on FLUX, outperforming representative baselines; adapts with only **4—6 reference images**.
  * Open-source project with **100+ GitHub stars**. See the [publication page](/publication/dreammix/).

* **FineRS++: Multi-Hypothesis Reasoning and Segmentation of Small Objects in High-Resolution Images** — *TPAMI, Under Review, Student First Author*
  * Built a Qwen2.5-VL-based global-local fine-grained perception framework with coarse-to-fine MLLM reinforcement learning (**GSE + LPR**) and a GRPO localization-aware backtracking reward.
  * Constructed a dedicated high-resolution small-object annotation dataset and achieved gIoU **55.1**, cIoU **46.5**, MVQA **83.3%**, and OVQA **56.7%** on FINERS-4k.

* **Pet Style Transformation** — *FLUX, Image Translation, Image Customization, LoRA; Project Lead*
  * Built a Flux-Fill in-context generation and paired-data synthesis pipeline with LoRA weight fusion, enabling pet-preserving cute-style transfer with cross-sample generalization.

* **MoE-based Object Detection for Challenging Environments** — *MoE, DINO, Object Detection; Project Lead*
  * Added a global-local routing MoE module to DINO and built the dataset pipeline; improved mAP from **0.52 to 0.59** in night, rain, snow, and other challenging conditions.

Awards
======
* RoboMaster Super Competition — **National First Prize**, Vision Team Deputy Leader (auto-aim, object detection, 3D SLAM)
* China Robot and Artificial Intelligence Competition — **National First Prize**, Team Captain (2D SLAM, robotic-arm control and planning)
* RoboCup China Robot Competition — **National First Prize**, Team Captain (instance segmentation, edge deployment, geometric planning)
* National College Student Innovation and Entrepreneurship Program — **Provincial First Prize**, Team Captain (voice interaction, pose recognition, IoT)
* **10+ national and provincial awards**, including a National Second Prize in the China College Computer Design Competition and the China University Intelligent Robot Creative Competition

Technical Skills
======
* **Deep learning:** PyTorch, diffusion models, multimodal LLMs, reinforcement learning, model fine-tuning, LoRA
* **Computer vision:** image generation/editing, object detection, segmentation, BEV, visual reasoning, temporal modeling
* **Robotics & deployment:** 2D/3D SLAM, auto-aim, robotic-arm planning, edge/vehicle deployment, automated evaluation
* **Programming:** Python, C/C++, Linux, OpenCV

Contact
======
* Email: [2286247133@qq.com](mailto:2286247133@qq.com)
* Location: Dalian, China
* Phone: available on request

Publications
======
<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>
