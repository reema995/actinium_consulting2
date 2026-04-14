const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/pages/home-page/home-page.component.html');
let content = fs.readFileSync(filePath, 'utf8');

// Regex to match the entire <a> tag for a card
const regex = /<a routerLink="\/services" fragment="([^"]+)" data-aos="([^"]+)" data-aos-delay="([^"]+)"\s+class="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-\[0_4px_20px_rgba\(0,0,0,0\.04\)\] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">([\s\S]*?)<div class="mt-2 flex items-center text-\[13px\] font-semibold text-\[#1d2858\]">\s*Learn more <i\s+class="fa-solid fa-arrow-right ml-2 text-\[11px\] transition-transform duration-300 group-hover:translate-x-1"><\/i>\s*<\/div>\s*<\/a>/g;

content = content.replace(regex, (match, fragment, aos, delay, innerContent) => {
  return `<div data-aos="${aos}" data-aos-delay="${delay}"
      class="flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
      ${innerContent.trim()}
      <div class="mt-auto flex flex-col gap-2 pt-3 border-t border-gray-50">
        <a routerLink="/services" fragment="${fragment}" class="flex items-center w-fit text-[13px] font-semibold text-[#1d2858] hover:text-blue-600 transition-colors">
          Learn more <i class="fa-solid fa-arrow-right ml-2 text-[11px] transition-transform duration-300 group-hover:translate-x-1"></i>
        </a>
        <a routerLink="/contact" class="flex items-center w-fit text-[12px] font-semibold text-gray-500 hover:text-[#1d2858] transition-colors rounded bg-gray-50 px-2 py-1.5 border border-gray-100/80 hover:bg-gray-100">
          <i class="fa-solid fa-calendar-check mr-1.5 text-[10px]"></i> Book a Consultation
        </a>
      </div>
    </div>`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update complete');
