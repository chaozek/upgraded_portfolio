-- CreateTable
CREATE TABLE "component" (
    "id" SERIAL NOT NULL,
    "page" TEXT,
    "name" VARCHAR(255),
    "parentName" VARCHAR(255),
    "title" TEXT,
    "show" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "pageComponentsId" INTEGER,

    CONSTRAINT "component_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComponentToRender" (
    "id" SERIAL NOT NULL,
    "show" BOOLEAN NOT NULL DEFAULT true,
    "component" VARCHAR(255) NOT NULL,
    "pageName" TEXT,
    "pageComponentsId" INTEGER,

    CONSTRAINT "ComponentToRender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pageComponents" (
    "id" SERIAL NOT NULL,
    "page" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pageComponents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "text" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(5000) NOT NULL,
    "textOrder" VARCHAR(255) NOT NULL,
    "description" VARCHAR(600),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "componentId" INTEGER,
    "pageComponentsId" INTEGER,

    CONSTRAINT "text_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "component" TEXT NOT NULL,
    "specificLoc" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "component_name_key" ON "component"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ComponentToRender_component_key" ON "ComponentToRender"("component");

-- CreateIndex
CREATE UNIQUE INDEX "pageComponents_page_key" ON "pageComponents"("page");

-- CreateIndex
CREATE UNIQUE INDEX "text_textOrder_componentId_key" ON "text"("textOrder", "componentId");

-- AddForeignKey
ALTER TABLE "component" ADD CONSTRAINT "component_pageComponentsId_fkey" FOREIGN KEY ("pageComponentsId") REFERENCES "pageComponents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComponentToRender" ADD CONSTRAINT "ComponentToRender_pageComponentsId_fkey" FOREIGN KEY ("pageComponentsId") REFERENCES "pageComponents"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "text" ADD CONSTRAINT "text_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "component"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "text" ADD CONSTRAINT "text_pageComponentsId_fkey" FOREIGN KEY ("pageComponentsId") REFERENCES "pageComponents"("id") ON DELETE SET NULL ON UPDATE CASCADE;
