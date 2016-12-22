

  <% for (let i = 0; i < data.length; i++) { %>
    <% if (data[i].state === state) { %>
      <div>
        <p>Date: <%= data[i].date %></p>
        <p>City: <%= data[i].city %></p>
        <p>State: <%= data[i].state %></p>
        <p>Shape: <%= data[i].shape %></p>
        <p>Duration: <%= data[i].duration %></p>
        <p>Description: <%= data[i].description %></p>
      </div>
     <% } else if (data[i].city === city) { %>
      <div>
        <p>Date: <%= data[i].date %></p>
        <p>City: <%= data[i].city %></p>
        <p>State: <%= data[i].state %></p>
        <p>Shape: <%= data[i].shape %></p>
        <p>Duration: <%= data[i].duration %></p>
        <p>Description: <%= data[i].description %></p>
      </div>
    <% } else if (data[i].shape === shape) { %>
      <div>
        <p>Date: <%= data[i].date %></p>
        <p>City: <%= data[i].city %></p>
        <p>State: <%= data[i].state %></p>
        <p>Shape: <%= data[i].shape %></p>
        <p>Duration: <%= data[i].duration %></p>
        <p>Description: <%= data[i].description %></p>
      </div>
   <% } } %>

