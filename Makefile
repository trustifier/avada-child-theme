LESSC=lessc
LESSCOPTS=

style.css: style.less
	$(LESSC) $(LESSCOPTS) $< $@
