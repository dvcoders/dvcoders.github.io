---
layout: page
title: Project
subtitle: The game is about to begin
permalink: /project/
---
<section class="projects">
  {% for post in site.projects %}
      {% cycle '<div class="row">', '' %}
        <div class="project">
          {% if post.image %}
            <img src="{{ site.baseurl }}/images/project_images/{{ post.image }}">
          {% endif %}
          <h3> {{ post.title }} </h3>
          <p> {{ post.content }} </p>
        </div>
      {% cycle '', '</div>' %}
    {% endfor %}
    {% if site.projects | size | modulo: 2 == 1 %}
    </div>
    {% endif %}
  {% endfor %}
</section>