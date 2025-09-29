import {Container} from "@/components/container";
import {Link} from "@/i18n/navigation";

const col1 = [
    "Kaspi Gold",
    "Kaspi Gold для ребенка",
    "Kaspi Red",
    "Kaspi Депозит",
    "Накопительный Депозит",
    "Кредит на Покупки",
    "Рассрочка",
    "Кредит для ИП",
    "Кредит Наличными",
];

const col2 = [
    "Магазин",
    "Travel",
    "Платежи",
    "Мой банк",
    "Переводы",
    "Акции",
    "Госуслуги",
    "Объявления",
    "Kaspi Гид",
];

const col3 = [
    "Kaspi Pay",
    "Бизнес Кредит",
    "Кредит для ИП",
    "Продавать в Интернет-магазине на Kaspi.kz",
    "Принимать платежи с Kaspi.kz",
    "Kaspi Гид",
    "Кабинет партнера Kaspi Pay",
];

const col4 = [
    "9999 Бесплатно с мобильного",
    "Отделения Kaspi.kz",
    "Пользовательское соглашение",
    "Вакансии",
    "Investor Relations",
    "Комплаенс контроль",
];

const LinkItem = ({children, href = "#"}: { children: React.ReactNode; href?: string }) => (
    <Link
        href={href}
        className="block text-sm text-gray-500 hover:text-gray-900 leading-7"
    >
        {children}
    </Link>
);

// минимальные SVG-иконки без зависимостей
const IconWrap = ({children, label}: { children: React.ReactNode; label: string }) => (
    <a
        href="#"
        aria-label={label}
        className="h-8 w-8 grid place-items-center rounded-full border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300 transition"
    >
        {children}
    </a>
);

export const Footer = () => {
    return (
        <footer className="w-full">
            <Container>
                {/* Верхняя сетка ссылок */}
                <div className="py-10 lg:py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Колонка 1 */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-3">
                                Продукты Kaspi.kz
                            </h4>
                            <div>
                                {col1.map((t) => (
                                    <LinkItem key={t}>{t}</LinkItem>
                                ))}
                            </div>
                        </div>

                        {/* Колонка 2 */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-3">
                                Сервисы Kaspi.kz
                            </h4>
                            <div>
                                {col2.map((t) => (
                                    <LinkItem key={t}>{t}</LinkItem>
                                ))}
                            </div>
                        </div>

                        {/* Колонка 3 */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Для Бизнеса</h4>
                            <div>
                                {col3.map((t) => (
                                    <LinkItem key={t}>{t}</LinkItem>
                                ))}
                            </div>
                        </div>

                        {/* Колонка 4 — чат и прочее */}
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <h4 className="font-semibold text-gray-900">Чат с Kaspi Гид</h4>
                                <span
                                    className="px-2.5 py-0.5 text-xs rounded-full bg-gray-100 border border-gray-200 text-gray-700">
                                  Написать
                                </span>
                            </div>
                            <div className="mb-6">
                                {col4.map((t) => (
                                    <LinkItem key={t}>{t}</LinkItem>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Нижняя информация */}
                <div className="border-t py-6 text-sm text-gray-500">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                        <div className="flex-1">
                            <p>© 2012–2025, АО «Kaspi Bank»</p>
                            <p className="mt-3 leading-6">
                                Лицензия на проведение банковских и иных операций и деятельности на рынке ценных бумаг
                                №1.2.245/61 от 03.02.2020, выданная Агентством Республики Казахстан по регулированию и
                                развитию финансового рынка
                            </p>
                            <p className="mt-2">
                                <Link href="#"
                                      className="hover:text-gray-900 underline decoration-transparent hover:decoration-gray-300">
                                    Корпоративный сайт
                                </Link>
                            </p>
                        </div>

                        {/* Дублируем иконки справа на больших экранах */}
                        <div className="hidden lg:flex items-start gap-3">
                            <IconWrap label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor"/>
                                    <circle cx="12" cy="12" r="4" stroke="currentColor"/>
                                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                                </svg>
                            </IconWrap>
                            <IconWrap label="YouTube">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <rect x="3" y="7" width="18" height="10" rx="3" stroke="currentColor"/>
                                    <path d="M11 10l5 2-5 2v-4z" fill="currentColor"/>
                                </svg>
                            </IconWrap>
                            <IconWrap label="TikTok">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M14 5c1.2 1.8 2.6 3 5 3v3c-2.5 0-4.4-1-5-2v6.5A4.5 4.5 0 119.5 11h2A2.5 2.5 0 1014 13V5z"
                                        stroke="currentColor" strokeLinejoin="round"/>
                                </svg>
                            </IconWrap>
                            <IconWrap label="Telegram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 4L3 11l6 2 2 6 3-4 5-11z" stroke="currentColor"/>
                                </svg>
                            </IconWrap>
                            <IconWrap label="Facebook">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M14 8h3V5h-3a4 4 0 00-4 4v3H7v3h3v6h3v-6h3l1-3h-4V9a1 1 0 011-1z"
                                          stroke="currentColor"/>
                                </svg>
                            </IconWrap>
                            <IconWrap label="VK">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 7h3l2 4 2-4h3l-3 5 3 5h-3l-2-4-2 4H3l3-5L3 7z" stroke="currentColor"/>
                                </svg>
                            </IconWrap>
                            <IconWrap label="OK">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="7" r="3" stroke="currentColor"/>
                                    <path d="M7 15a8 8 0 0010 0M9 18l3-2 3 2" stroke="currentColor"/>
                                </svg>
                            </IconWrap>
                            <IconWrap label="LinkedIn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <rect x="4" y="9" width="4" height="11" stroke="currentColor"/>
                                    <rect x="4" y="4" width="4" height="3" stroke="currentColor"/>
                                    <path d="M12 20v-7a3 3 0 016 0v7" stroke="currentColor"/>
                                </svg>
                            </IconWrap>
                            <IconWrap label="WhatsApp">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 12a8 8 0 10-3.1 6.3L17 21l.7-2.8A8 8 0 0020 12z"
                                          stroke="currentColor"/>
                                    <path d="M8.5 9.5c.5 2 2.5 4 4.5 4.5l1.2-1.2" stroke="currentColor"/>
                                </svg>
                            </IconWrap>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
