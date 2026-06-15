---
title: "DeepSeek API怎么接入？开发者从零开始完整教程"
description: "从注册DeepSeek开放平台到发出第一个API请求的全流程教程，含密钥管理和常见错误处理。"
category: "tutorial"
date: 2026-06-15
tags: ["deepseek API", "deepseek开发者", "deepseek接入"]
keywords: "deepseek API,deepseek开发者,deepseek接入,deepseek接口,deepseek密钥"
---

DeepSeek开放平台向开发者提供与客户端同源的模型能力，支持按token计费的弹性调用。本教程从注册到发出首个API请求，每一步都有说明。

## 注册与获取API Key

访问 DeepSeek 开放平台（platform.deepseek.com），使用邮箱或手机号注册。进入控制台「API Keys」页面创建新密钥。完整密钥仅在创建时显示一次，务必立即保存。密钥写入代码时不要硬编码在公开仓库里——用环境变量或密钥管理系统。

## 基础调用示例

DeepSeek API兼容Chat Completions风格的接口。请求头携带`Authorization: Bearer YOUR_API_KEY`，正文指定模型名称（deepseek-chat对应V3，deepseek-reasoner对应R1）、消息数组和参数。

首次集成先用短prompt验证连通性，再逐步放开max_tokens做长文测试。流式输出（stream: true）适合对话界面，可降低首字等待时间。

## 模型选择和计费

- deepseek-chat（V3）：通用对话，¥1/百万token
- deepseek-reasoner（R1）：深度推理，¥4/百万token
- Coder系列：代码补全和审查

新用户注册赠送免费额度，日常测试不会产生费用。

更多教程可以看[DeepSeek R1使用教程](/tutorial/deepseek-r1-guide/)和[DeepSeek V3写作指南](/tutorial/deepseek-v3-tips/)。还没有API账号？[前往DeepSeek开放平台注册](/download/)。
