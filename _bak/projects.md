---
layout: page
title: Projects
subtitle: Do a thing
permalink: /projects/
---

<div class="projects">
  <ul>
    {% for project in site.projects %}
    <li>

      {% if project.image %}
      <img src="{{ site.baseurl }}/images/{{ projects.image }}">
      {% else %}
      <!-- Place Holder -->
      <img src="{{ site.baseurl }}/images/projects-placeholder.png">
      {% endif %}

      <h1><a href="{{ project.link }}">{{ project.title }}</a></h1>

      {% if project.contributors %}
      <h6 class="projects-contributors">Contributors : {{ project.contributors }}</h6>
      {% endif %}

      <p>{{ project.content }}</p>

    </li>
    {% endfor %}
  </ul>
</div>
