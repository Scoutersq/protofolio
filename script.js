 document.addEventListener("DOMContentLoaded", function () {
        const folderItems = document.querySelectorAll(".folder-item");

        folderItems.forEach((item) => {
          // Smooth click effect
          item.addEventListener("click", function (e) {
            this.style.transform = "translateY(-2px) scale(0.98)";
            setTimeout(() => {
              this.style.transform = "";
            }, 150);
          });

          // Subtle hover effect
          item.addEventListener("mouseenter", function () {
            this.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
          });
        });
      });

      // Keyboard navigation support
      document.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          if (e.target.classList.contains("folder-item")) {
            e.target.click();
          }
        }
      });