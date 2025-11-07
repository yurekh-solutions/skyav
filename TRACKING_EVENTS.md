# Tracking Events Reference

## 📊 All Available Tracking Events

This website has **comprehensive tracking** built-in. Here's what gets tracked:

---

## 🎯 User Engagement Events

### Phone Click
**Event:** `phone_click`
**Triggers when:** User clicks phone number
```typescript
trackUserAction.phoneClick();
```
**Use in Google Ads:** Phone call conversion

---

### WhatsApp Click
**Event:** `whatsapp_click`
**Triggers when:** User clicks WhatsApp button
```typescript
trackUserAction.whatsappClick();
```
**Use in Google Ads:** Contact conversion

---

### Email Click
**Event:** `email_click`
**Triggers when:** User clicks email address
```typescript
trackUserAction.emailClick();
```
**Use in Google Ads:** Contact conversion

---

### Instagram Click
**Event:** `instagram_click`
**Triggers when:** User clicks Instagram profile link
```typescript
trackUserAction.instagramClick();
```
**Use in Google Ads:** Social engagement metric

---

## 💼 Conversion Events

### Form Submit
**Event:** `form_submit`
**Triggers when:** User submits contact form
```typescript
trackUserAction.formSubmit('contact_form');
```
**Use in Google Ads:** PRIMARY CONVERSION
**Auto-triggers:** Conversion tracking

---

### Quote Request
**Event:** `quote_request`
**Triggers when:** User requests quote
```typescript
trackUserAction.quoteRequest();
```
**Use in Google Ads:** HIGH-VALUE CONVERSION
**Auto-triggers:** Conversion tracking

---

### Service Inquiry
**Event:** `service_inquiry`
**Triggers when:** User clicks on service details
```typescript
trackUserAction.serviceInquiry('Projector Rental');
```
**Use in Google Ads:** Micro-conversion
**Parameters:** Service name

---

## 📹 Content Engagement

### Video Play
**Event:** `video_play`
**Triggers when:** User plays a video
```typescript
trackUserAction.videoPlay('Wedding Setup Demo');
```
**Use in Google Ads:** Engagement metric
**Parameters:** Video title

---

### Scroll Depth
**Event:** `scroll_depth`
**Triggers when:** User scrolls 75% of page
```typescript
// Auto-tracked
```
**Use in Google Ads:** Engagement quality metric

---

## 🛒 E-commerce Events (Optional)

### Product View
**Event:** `view_item`
**Triggers when:** User views pricing/package
```typescript
trackProductView('Premium LED Wall Package', 25000, 'LED Walls');
```
**Use in Google Ads:** Enhanced e-commerce
**Parameters:** Product name, price, category

---

## 📈 How to Use These Events

### 1. In Your Components

Example - Track phone click in FloatingActions:
```tsx
import { trackUserAction } from "@/lib/tracking";

<a 
  href="tel:+918655973366"
  onClick={() => trackUserAction.phoneClick()}
>
  Call Now
</a>
```

### 2. In Google Ads Conversions

**Set up conversions for:**
1. **Form Submit** → "Contact Form Submission"
2. **Quote Request** → "Quote Request"
3. **Phone Click** → "Phone Call Click"
4. **WhatsApp Click** → "WhatsApp Contact"

### 3. In Google Analytics

**Create custom audiences based on:**
- Users who played videos
- Users who scrolled > 75%
- Users who clicked specific services
- Users who requested quotes but didn't convert

---

## 🎨 Implementation Examples

### Track Button Click
```tsx
<Button 
  onClick={() => {
    trackUserAction.phoneClick();
    window.location.href = 'tel:+918655973366';
  }}
>
  Call Now
</Button>
```

### Track Form Submission
```tsx
const handleSubmit = (data) => {
  // Send form data
  submitForm(data);
  
  // Track conversion
  trackUserAction.formSubmit('contact_form');
};
```

### Track Service Card Click
```tsx
<Card 
  onClick={() => trackUserAction.serviceInquiry('LED Wall Rental')}
>
  <CardTitle>LED Wall Rental</CardTitle>
</Card>
```

---

## 🔍 Testing Your Tracking

### 1. Google Tag Assistant
1. Install Chrome extension
2. Enable Tag Assistant
3. Reload your page
4. Click through actions
5. Verify events fire

### 2. Google Analytics Real-Time
1. Go to Google Analytics
2. Click "Real-time" → "Events"
3. Perform actions on site
4. See events appear instantly

### 3. Console Debugging
Enable debug mode in `tracking.ts`:
```typescript
export const trackEvent = (eventName: string, eventParams?: EventParams) => {
  console.log('Track Event:', eventName, eventParams); // Add this
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};
```

---

## 📊 Recommended Google Ads Conversion Setup

### Primary Conversions (Optimize for these)
1. **Form Submit** - Value: ₹500
2. **Quote Request** - Value: ₹500
3. **Phone Click** - Value: ₹300

### Secondary Conversions (Track but don't optimize)
1. WhatsApp Click - Value: ₹100
2. Email Click - Value: ₹100
3. Service Inquiry - Value: ₹50

### Micro-Conversions (Engagement metrics)
1. Video Play
2. Scroll Depth
3. Instagram Click

---

## 🚀 Pro Tips

1. **Assign Values:** Give each conversion a monetary value based on average booking
2. **Smart Bidding:** Use Target CPA or Maximize Conversions
3. **Conversion Window:** Set 30-day window (people research before booking)
4. **Attribution:** Use Data-Driven attribution model
5. **Remarketing:** Create audiences from video viewers and service inquirers

---

## ✅ Pre-configured Events

All these events are **already configured** in `src/lib/tracking.ts`. You just need to:

1. **Add tracking IDs** → See GOOGLE_ADS_SETUP.md
2. **Enable tracking** → Set `enabled={true}` in Index.tsx
3. **Deploy** → Events will start tracking automatically!

---

## 📞 Need Help?

Questions about tracking setup?
- Email: sky.av.rentals@gmail.com
- Phone: +91 86559 73366

Happy tracking! 📈
