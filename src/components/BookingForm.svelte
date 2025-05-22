<script>
  import * as m from '$lib/paraglide/messages.js';
  
  let formData = {
    name: '',
    email: '',
    phone: ''
  };

  function handleSubmit() {
    // Will handle form submission later
    console.log('Form submitted:', formData);
  }
</script>

<style>
  .form-container {
    width: 100%;
    max-width: 28rem;
    margin: 0 auto;
    padding: 1.5rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }

  .form-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .form-group {
    width: 100%;
    margin-bottom: 1rem;
    box-sizing: border-box;
  }

  .form-group:last-child {
    margin-bottom: 0;
  }

  .form-label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.5rem;
  }


  .form-input {
    width: 100%;
    padding: 0.5rem 0;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 1rem;
    line-height: 1.5;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .form-input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25);
  }

  .submit-btn {
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 0.375rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    margin-top: 1rem;
  }

  .submit-btn:hover {
    background-color: #1d4ed8;
  }

  .submit-btn:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }
</style>

<form on:submit|preventDefault={handleSubmit} class="form-container">
  <h2 class="form-title">{m.booking_form_title()}</h2>
  
  <!-- Name Field -->
  <div class="form-group">
    <label for="name" class="form-label">{m.booking_form_name_label()}</label>
    <input
      type="text"
      id="name"
      bind:value={formData.name}
      required
      class="form-input"
      placeholder={m.booking_form_name_placeholder()}
    />
  </div>

  <!-- Email Field -->
  <div class="form-group">
    <label for="email" class="form-label">{m.booking_form_email_label()}</label>
    <input
      type="email"
      id="email"
      bind:value={formData.email}
      required
      class="form-input"
      placeholder={m.booking_form_email_placeholder()}
    />
  </div>

  <!-- Phone Field -->
  <div class="form-group">
    <label for="phone" class="form-label">{m.booking_form_phone_label()}</label>
    <input
      type="tel"
      id="phone"
      bind:value={formData.phone}
      required
      class="form-input"
      placeholder={m.booking_form_phone_placeholder()}
    />
  </div>

  <!-- Submit Button -->
  <button type="submit" class="submit-btn">
    {m.booking_form_submit()}
  </button>
</form>
