---
# SPDX-FileCopyrightText: 2024 Nicco Kunzmann <niccokunzmann@rambler.ru>
# SPDX-FileCopyrightText: 2024 Yemaya Rodriguez
#
# SPDX-License-Identifier: LicenseRef-mine
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
---
