// عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
    // إعداد الخريطة - إحداثيات مدينة 6 أكتوبر
    const map = L.map("map").setView([29.9627, 30.9212], 15);
  
    // تحميل الطبقة الأساسية من خريطة OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);
  
    // إضافة علامة على الموقع مع نافذة منبثقة بالمعلومات
    L.marker([29.9627, 30.9212])
      .addTo(map)
      .bindPopup(
        "<b>مدرسة أجيال المستقبل السودانية</b><br>مدينة 6 أكتوبر - حي الزمالك - مجاور بيت العيلة"
      )
      .openPopup();
  });
  
  // وظيفة إظهار/إخفاء معلومات إضافية في الصفحة الرئيسية
  function toggleMoreInfo() {
    const infoBox = document.getElementById("more-info");
    infoBox.classList.toggle("show");
  }
  