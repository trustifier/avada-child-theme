LESSC=lessc
LESSCOPTS=

style.css:: style.less 
	$(LESSC) $(LESSCOPTS) $< $@

# .PHONY: style.css
