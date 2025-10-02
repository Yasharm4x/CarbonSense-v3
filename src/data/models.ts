// ==================== MODEL CATEGORIES ====================
export const MODEL_CATEGORIES = {
  llm: {
    name: "Large Language Models",
    models: {
      "gpt-5o": { name: "GPT-5o", params: 400, company: "OpenAI", energyMultiplier: 1.8, thresholdKWh: 0.001, beta: 0.5 },
      "gpt-4o": { name: "GPT-4o", params: 175, company: "OpenAI", energyMultiplier: 1.0, thresholdKWh: 0.001, beta: 0.5 },
      "claude-3": { name: "Claude 3 Opus", params: 175, company: "Anthropic", energyMultiplier: 1.0, thresholdKWh: 0.001, beta: 0.5 },
      "llama-3-70b": { name: "LLaMA 3 70B", params: 70, company: "Meta", energyMultiplier: 0.9, thresholdKWh: 0.001, beta: 0.5 },
      "gemini-pro": { name: "Gemini Pro", params: 137, company: "Google", energyMultiplier: 1.0, thresholdKWh: 0.001, beta: 0.5 },
      "mixtral-8x7b": { name: "Mixtral 8x7B", params: 47, company: "Mistral", energyMultiplier: 0.8, thresholdKWh: 0.001, beta: 0.5 },
      "gpt-3.5-turbo": { name: "GPT-3.5 Turbo", params: 20, company: "OpenAI", energyMultiplier: 0.7, thresholdKWh: 0.001, beta: 0.5 },
      "claude-3-sonnet": { name: "Claude 3 Sonnet", params: 70, company: "Anthropic", energyMultiplier: 0.9, thresholdKWh: 0.001, beta: 0.5 },
      "claude-3-haiku": { name: "Claude 3 Haiku", params: 30, company: "Anthropic", energyMultiplier: 0.6, thresholdKWh: 0.001, beta: 0.5 },
      "llama-3-8b": { name: "LLaMA 3 8B", params: 8, company: "Meta", energyMultiplier: 0.4, thresholdKWh: 0.001, beta: 0.5 },
      "gemini-flash": { name: "Gemini 1.5 Flash", params: 64, company: "Google", energyMultiplier: 0.8, thresholdKWh: 0.001, beta: 0.5 },
      "command-r+": { name: "Command R+", params: 104, company: "Cohere", energyMultiplier: 0.9, thresholdKWh: 0.001, beta: 0.5 },
      "yi-34b": { name: "Yi-34B", params: 34, company: "01.AI", energyMultiplier: 0.7, thresholdKWh: 0.001, beta: 0.5 },
      "qwen-72b": { name: "Qwen 1.5 72B", params: 72, company: "Alibaba", energyMultiplier: 0.9, thresholdKWh: 0.001, beta: 0.5 },
      "phi-3": { name: "Phi-3 Medium", params: 14, company: "Microsoft", energyMultiplier: 0.5, thresholdKWh: 0.001, beta: 0.5 },
      "openchat-3.5": { name: "OpenChat 3.5", params: 7, company: "OpenChat", energyMultiplier: 0.4, thresholdKWh: 0.001, beta: 0.5 }
    }
  },
  generative: {
    name: "Generative AI Models",
    models: {
      "stable-diffusion": { name: "Stable Diffusion XL", params: 3.5, company: "Stability AI", energyMultiplier: 2.5, thresholdKWh: 0.001, beta: 0.5 },
      "midjourney": { name: "Midjourney v6", params: 5.2, company: "Midjourney", energyMultiplier: 3.0, thresholdKWh: 0.001, beta: 0.5 },
      "dall-e-3": { name: "DALL-E 3", params: 12, company: "OpenAI", energyMultiplier: 4.0, thresholdKWh: 0.001, beta: 0.5 },
      "runway-gen3": { name: "Runway Gen-3", params: 8.5, company: "Runway", energyMultiplier: 8.0, thresholdKWh: 0.001, beta: 0.5 },
      "sora": { name: "Sora", params: 15, company: "OpenAI", energyMultiplier: 12.0, thresholdKWh: 0.001, beta: 0.5 },
      "imagen-2": { name: "Imagen 2", params: 10, company: "Google DeepMind", energyMultiplier: 3.8, thresholdKWh: 0.001, beta: 0.5 },
      "pika": { name: "Pika 1.0", params: 6, company: "Pika Labs", energyMultiplier: 6.5, thresholdKWh: 0.001, beta: 0.5 },
      "ideogram": { name: "Ideogram", params: 3, company: "Ideogram", energyMultiplier: 2.8, thresholdKWh: 0.001, beta: 0.5 },
      "firefly": { name: "Adobe Firefly", params: 2.5, company: "Adobe", energyMultiplier: 2.0, thresholdKWh: 0.001, beta: 0.5 },
      "gemini-image": { name: "Gemini Image", params: 9, company: "Google", energyMultiplier: 4.2, thresholdKWh: 0.001, beta: 0.5 }
    }
  },
  ml: {
    name: "Machine Learning Models",
    models: {
      "bert-large": { name: "BERT Large", params: 0.34, company: "Google", energyMultiplier: 0.3, thresholdKWh: 0.001, beta: 0.5 },
      "resnet-152": { name: "ResNet-152", params: 0.06, company: "Microsoft", energyMultiplier: 0.2, thresholdKWh: 0.001, beta: 0.5 },
      "efficientnet-b7": { name: "EfficientNet-B7", params: 0.066, company: "Google", energyMultiplier: 0.25, thresholdKWh: 0.001, beta: 0.5 },
      "yolo-v8": { name: "YOLOv8 Large", params: 0.043, company: "Ultralytics", energyMultiplier: 0.4, thresholdKWh: 0.001, beta: 0.5 },
      "roberta-large": { name: "RoBERTa Large", params: 0.355, company: "Meta", energyMultiplier: 0.35, thresholdKWh: 0.001, beta: 0.5 },
      "logistic-regression": { name: "Logistic Regression", params: 0.0001, company: "Generic", energyMultiplier: 0.05, thresholdKWh: 0.001, beta: 0.5 },
      "linear-regression": { name: "Linear Regression", params: 0.0001, company: "Generic", energyMultiplier: 0.04, thresholdKWh: 0.001, beta: 0.5 },
      "decision-tree": { name: "Decision Tree", params: 0.001, company: "Generic", energyMultiplier: 0.06, thresholdKWh: 0.001, beta: 0.5 },
      "random-forest": { name: "Random Forest", params: 0.01, company: "Generic", energyMultiplier: 0.08, thresholdKWh: 0.001, beta: 0.5 },
      "xgboost": { name: "XGBoost", params: 0.02, company: "DMLC", energyMultiplier: 0.1, thresholdKWh: 0.001, beta: 0.5 },
      "lightgbm": { name: "LightGBM", params: 0.015, company: "Microsoft", energyMultiplier: 0.09, thresholdKWh: 0.001, beta: 0.5 },
      "svm": { name: "Support Vector Machine", params: 0.005, company: "Generic", energyMultiplier: 0.07, thresholdKWh: 0.001, beta: 0.5 },
      "kmeans": { name: "K-Means Clustering", params: 0.002, company: "Generic", energyMultiplier: 0.05, thresholdKWh: 0.001, beta: 0.5 },
      "naive-bayes": { name: "Naive Bayes", params: 0.0005, company: "Generic", energyMultiplier: 0.03, thresholdKWh: 0.001, beta: 0.5 },
      "knn": { name: "K-Nearest Neighbors", params: 0.003, company: "Generic", energyMultiplier: 0.06, thresholdKWh: 0.001, beta: 0.5 }
    }
  },
  quantized: {
    name: "Quantized Models",
    models: {
      "llama-3-8b-q4": { name: "LLaMA 3 8B (4-bit)", params: 8, company: "Meta", energyMultiplier: 0.4, thresholdKWh: 0.001, beta: 0.5 },
      "gpt-3.5-q8": { name: "GPT-3.5 (8-bit)", params: 20, company: "OpenAI", energyMultiplier: 0.6, thresholdKWh: 0.001, beta: 0.5 },
      "bert-base-q4": { name: "BERT Base (4-bit)", params: 0.11, company: "Google", energyMultiplier: 0.2, thresholdKWh: 0.001, beta: 0.5 },
      "stable-diffusion-q8": { name: "Stable Diffusion (8-bit)", params: 3.5, company: "Stability AI", energyMultiplier: 1.2, thresholdKWh: 0.001, beta: 0.5 },
      "mistral-7b-q4": { name: "Mistral 7B (4-bit)", params: 7, company: "Mistral", energyMultiplier: 0.35, thresholdKWh: 0.001, beta: 0.5 },
      "gemma-7b-q4": { name: "Gemma 7B (4-bit)", params: 7, company: "Google", energyMultiplier: 0.38, thresholdKWh: 0.001, beta: 0.5 },
      "bge-large-q8": { name: "BGE Large (8-bit)", params: 0.35, company: "BAAI", energyMultiplier: 0.25, thresholdKWh: 0.001, beta: 0.5 },
      "vicuna-13b-q4": { name: "Vicuna 13B (4-bit)", params: 13, company: "LMSYS", energyMultiplier: 0.45, thresholdKWh: 0.001, beta: 0.5 },
      "zephyr-7b-q8": { name: "Zephyr 7B (8-bit)", params: 7, company: "Hugging Face", energyMultiplier: 0.5, thresholdKWh: 0.001, beta: 0.5 },
      "phi-2-q4": { name: "Phi-2 (4-bit)", params: 2.7, company: "Microsoft", energyMultiplier: 0.25, thresholdKWh: 0.001, beta: 0.5 },
      "deepseek-coder-q4": { name: "DeepSeek Coder 6.7B (4-bit)", params: 6.7, company: "DeepSeek", energyMultiplier: 0.3, thresholdKWh: 0.001, beta: 0.5 }
    }
  }
};

// ==================== DATASET TYPES ====================
export const DATASET_TYPES = {
  structured: { 
    name: "Structured Data", 
    description: "Tables, CSV, databases", 
    energyMultiplier: 1.0 
  },
  unstructured: { 
    name: "Unstructured Data", 
    description: "Text, images, audio, video", 
    energyMultiplier: 2.5 
  },
  combined: { 
    name: "Combined Data", 
    description: "Mix of structured and unstructured", 
    energyMultiplier: 1.6 
  }
};

// ==================== ML TASKS ====================
export const ML_TASKS = {
  classification: { name: "Classification", energyMultiplier: 1.0 },
  regression: { name: "Regression", energyMultiplier: 0.9 },
  clustering: { name: "Clustering", energyMultiplier: 1.1 },
  generation: { name: "Text/Content Generation", energyMultiplier: 1.8 },
  summarization: { name: "Summarization", energyMultiplier: 1.2 },
  translation: { name: "Translation", energyMultiplier: 1.3 },
  "object-detection": { name: "Object Detection", energyMultiplier: 1.6 },
  "image-generation": { name: "Image Generation", energyMultiplier: 3.0 },
  "video-generation": { name: "Video Generation", energyMultiplier: 8.0 },
  "speech-recognition": { name: "Speech Recognition", energyMultiplier: 1.4 },
  "speech-synthesis": { name: "Speech Synthesis", energyMultiplier: 2.0 },
  "recommendation": { name: "Recommendation Systems", energyMultiplier: 1.1 }
};

// ==================== REGIONS ====================
export const REGION_DATA = {
  "us-west": { name: "US West Coast", carbonIntensity: 350, pue: 1.2 },
  "us-east": { name: "US East Coast", carbonIntensity: 500, pue: 1.3 },
  "eu-west": { name: "Western Europe", carbonIntensity: 300, pue: 1.15 },
  "asia-pacific": { name: "Asia Pacific", carbonIntensity: 700, pue: 1.4 },
  "global-avg": { name: "Global Average", carbonIntensity: 475, pue: 1.25 },
};

// ==================== HARDWARE TYPES ====================
export const HARDWARE_TYPES = {
  cpu: {
    name: "CPU",
    powerKW: 0.05,
    utilization: 0.6,
    description: "Standard Central Processing Unit, energy-efficient for smaller models or classic ML."
  },
  gpu: {
    name: "GPU",
    powerKW: 0.6,
    utilization: 0.85,
    description: "Graphics Processing Unit, ideal for LLMs and generative workloads."
  },
  tpu: {
    name: "TPU v4",
    powerKW: 0.4,
    utilization: 0.9,
    description: "Google's custom Tensor Processing Unit optimized for large-scale AI training."
  }
};
