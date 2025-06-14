---
title: "Building Custom Extensions in Business Central"
date: 2025-06-13
tags: ["Business Central", "AL", "Extensions"]
---
# Building Custom Extensions in Business Central

Learn how to create extensions in [Business Central](https://dynamics.microsoft.com).

```al
codeunit 50100 MyCodeunit
{
    procedure MyProcedure()
    begin
        Message('Hello, Business Central!');
    end;
}