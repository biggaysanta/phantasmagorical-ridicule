---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
author: "Paul-Porter V. Brown, CMT"
categories:
tags:
sections:
  - title: "Section One Placeholder"
    level: 2
    content: |
      This is the **first paragraph** of the introduction.
      It can have multiple lines.

      - Item A
      - Item B
  - title: "Sub-section A: Details"
    level: 3
    content: |
      More details about sub-section A.
      Could include `code blocks`.
  - title: "Section Two: Conclusion"
    level: 2
    content: |
      The conclusion to my great article.
      Thank you for reading!
---
